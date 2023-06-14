import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [])

    //This will output the refreshed accessToken.
    // useEffect(() => {
    //     console.log(`isLoading: ${isLoading}`);
    //     console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    // }, [isLoading])

    return (
        <>
            {isLoading ? <h1>... is loading</h1> : <Outlet />}
        </>
    )
}

export default PersistLogin;