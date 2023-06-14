import { useContext } from "react";
import AuthContext from "./AuthProvider";
import axios from "./axios";

const useLogout = () => {
    const { setAuth } = useContext(AuthContext);

    const logout = () => {
        setAuth({});

        try {
            axios('/logout', {
                withCredentials: true,
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout;