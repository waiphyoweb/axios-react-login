import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import jwt_decode from 'jwt-decode';
import Cookies from "universal-cookie";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { setAuth } = useAuth();
    const cookies = new Cookies();
    const accessCookie = cookies.get('AT');
    const now = new Date();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            async (config) => {
                const decodedAT = jwt_decode(accessCookie);
                console.log(decodedAT, now);
                if ((decodedAT * 1000) - 10000 < now.getTime()) {
                    const newAccessToken = await refresh();
                    config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    console.log('new at');
                } else {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                    console.log('old at');
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        // const responseIntercept = axiosPrivate.interceptors.response.use(
        //     response => response,
        //     async (error) => {
        //         const prevRequest = error?.config;
        //         if (error?.response?.status === 403 && !prevRequest?.sent) {
        //             prevRequest.sent = true;
        //             const newAccessToken = await refresh();
        //             prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        //             return axiosPrivate(prevRequest);
        //         }
        //         return Promise.reject(error);
        //     }
        // );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            // axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;