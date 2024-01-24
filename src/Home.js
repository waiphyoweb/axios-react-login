// import { useContext } from "react";
// import AuthContext from "./AuthProvider";
import useLogout from "./useLogout";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Home = () => {
    const logout = useLogout();

    return (
        <div className="App">
            <h1>You're successfully logined!</h1>
            <div>
                <h6>{cookies.get('AT')}</h6>
            </div>

            <button onClick={() => {
                    logout();
                    cookies.remove('AT');
                } 
            }>Log Out</button>
        </div>
    )
}

export default Home;