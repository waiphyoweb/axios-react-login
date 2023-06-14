import { Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import Login from "./Login";

const RequireAuth = () => {
    const { auth } = useAuth();

    return (
        auth?.user ? <Outlet /> : <Login />
    )
}   

export default RequireAuth;