import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import useRefreshToken from './useRefreshToken';

const cookies = new Cookies();
const BASE_URL = 'http://localhost:3000';

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

axiosPrivate.interceptors.request.use( async (config) => {
    const accessToken = cookies.get('AT');
    const decodedAT = jwt_decode(accessToken);
    const expiredTimeOfAT = decodedAT.exp * 1000;
    const refresh = useRefreshToken();

    console.log("intercept work!", new Date(expiredTimeOfAT))

    if (expiredTimeOfAT - 120000 < new Date().getTime()) {
        console.log("at in intercep")
        const response = await refresh();
        const newAccessToken = await response?.data?.token?.accessToken;
        const newRefreshToken = await response?.data?.token?.refreshToken;

        //decode tokens to set updated exp times
        const newDecodedRT = jwt_decode(newRefreshToken);
        const newExpiredTimeOfRT = newDecodedRT * 1000;

        cookies.set("AT", newAccessToken, {
            path: "/",
            expires: (new Date(newExpiredTimeOfRT))
        });
        cookies.set("RT", newRefreshToken, {
            path: "/",
            expires: (new Date(newExpiredTimeOfRT))
        });
        config.headers["secret_key"] = newAccessToken;
    } else {
        config.headers["secret_key"] = accessToken;
    }
    return config;
}, (error) => Promise.reject(error));

export default axiosPrivate