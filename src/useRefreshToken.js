import Cookies from 'universal-cookie';
import { axiosPrivate } from './axiosInstance';
import useAuth from './useAuth';

const cookies = new Cookies();
const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axiosPrivate.get('/refresh', {
            withCredentials: true
        });
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return {
        //         ...prev,
        //         accessToken: response.data.accessToken
        //     }
        // });
        setAuth({ accessToken: response.data.accessToken });
        cookies.set('AT', response?.data?.accessToken, { path: '/', maxAge: 30, secure: true, })
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
