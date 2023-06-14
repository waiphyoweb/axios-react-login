import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Layout from './Layout';
import Home from './Home';
import RequireAuth from './RequireAuth';
import PersistLogin from './PersistLogin';



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Layout />} >
						<Route path="register" exact element={<Register />} />
						<Route path="login" element={<Login />} />
						<Route element={<PersistLogin />} >
							<Route element={<RequireAuth />} >
								<Route path='/' element={<Home />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
