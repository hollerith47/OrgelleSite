import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
	const [loginStatus,setLoginStatus] = useState("");
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	
	const resetForm = () => {
		// setUsername("");
		// setPassword("");
	};
	
	const login = (e)=> {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:3002/login',
			data: {
				username: username,
				password: password
			}
		}).then(()=> {
				setLoginStatus("User logged in");
				resetForm();
				setIsLoggedIn(true);
				navigate("/")
			}
		).catch(()=>{
			setLoginStatus("username ou mot de passe incorrect");
		});
	};
	
	if (isLoggedIn) {
		return <div>Vous êtes déjà connecté. Redirection vers la page d'accueil...</div>;
	}
	
	return (
		<>
			<div className={"container"}>
					<h1>Login</h1>
					<form onSubmit={login}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Username</label>
							<input
								type="username"
								name="username"
								onChange={(e)=>setUsername(e.target.value)}
								className="form-control"
								id="username" aria-describedby="emailHelp"/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
							<input
								type="password"
								name="password"
								onChange={(e)=>setPassword(e.target.value)}
								id="password" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-primary">Se connecter</button>
						<div style={{ color: "red", textAlign:"center"}}>{loginStatus}</div>
					</form>
				</div>
		</>
	);
};

export default Login;
