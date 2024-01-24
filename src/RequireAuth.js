import { Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import Login from "./Login";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const RequireAuth = () => {
    const { auth } = useAuth();

    return (
        auth?.accessToken ? <Outlet /> : <Login />
    )
}   

export default RequireAuth;