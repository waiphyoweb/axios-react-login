import { useContext } from "react";
import AuthContext from "./AuthProvider";
import useLogout from "./useLogout";

const Home = () => {
    const { auth } = useContext(AuthContext);
    const logout = useLogout();

    return (
        <>
            <h1>You're successfully logined!</h1>

            <button onClick={() => {
                    logout();
                } 
            }>Log Out</button>
        </>
    )
}

export default Home;