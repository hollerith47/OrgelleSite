import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [email,setEmail] = useState("");
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
	const [registerStatus,setRegisterStatus] = useState("");
	const navigate = useNavigate();
	
	const resetForm = () => {
		setEmail("");
		setUsername("");
		setPassword("");
		setRegisterStatus("");
	};
	
	const register = (e)=> {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:3002/register',
			data: {
				email: email,
				username: username,
				password: password
			}
		}).then((response)=>
			{
				if(response.data.message){
					setRegisterStatus(response.data.message);
				}else{
					setRegisterStatus("User successfully registered");
					navigate("/login")
					resetForm();
				}
			}
		);
	};
	return (
		<div className={"container"}>
			<h1>Register</h1>
			<form onSubmit={register}>
				{/*<div className="mb-3">*/}
				{/*	<label htmlFor="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>*/}
				{/*	<input type="text" name={'name'} className="form-control" id="name" aria-describedby="emailHelp"/>*/}
				{/*</div>*/}
				<div className="mb-3">
					<label htmlFor="username" className="form-label">username</label>
					<input
						type="text"
						name='username'
						onChange={(e)=>setUsername(e.target.value)}
						className="form-control"
						id="username" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email address</label>
					<input
						type="email"
						name='email'
						onChange={(e)=>setEmail(e.target.value)}
						className="form-control"
						id="email" aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">Password</label>
					<input
						type="password"
						name={'password'}
						onChange={(e)=>setPassword(e.target.value)}
						className="form-control"
						id="password"/>
				</div>
				<button type="submit" className="btn btn-primary">S'Enregistrer</button>
				<div style={{ color: "green", textAlign:"center"}}>{registerStatus}</div>
			</form>
		</div>
	);
};

export default Register;