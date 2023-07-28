import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Style/register.css';

export const Login = (props) =>{
	const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
	const [id, setId]=useState('');
	const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(email);
		console.log(id);
		if (id === '' || email === '' || password === '') {
			setError(true);
		} 
        else{
			setSubmitted(true);
			setError(false);
		}
	}

    const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',}}>
				<h2 style={{color:"teal"}}>User {id} has successfully Logged In:)</h2>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h2 style={{color:"	teal"}}>Please enter all the fields :(</h2>
			</div>
		);
	};

	return(
		<div className="all">
		<div className="container" style={{width:'40%'}}>
			<h2>Log In</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="flogin" onSubmit={handleSubmit} >
				<label > Username </label>
				<input value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="text" placeholder="UserName" required/>

				<label for="email" > Email </label>
				<input className="input1" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>

				<label for="password" > Password </label>
				<input  value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" minlength="8" required/>
				<Link to='/Sidebar'>
				<button type="submit" style={{width:'20%',textAlign:'center', marginLeft:'40%', backgroundColor:'black'}} >Log In</button><br/><br/>
				</Link>
			</form>
			<Link to='/Register'>Don't have an account? Register</Link>
		</div>
		</div>
	)
}