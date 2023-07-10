import React, { useState } from "react";

export const Login = (props) =>{
	const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
	const [id, setId]=useState('');
	const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault();
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
				<h1>User {id} has successfully Logged In:)</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h1>Please enter all the fields :(</h1>
			</div>
		);
	};

	return(
		<div className="container">
			<h2>Log In</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="flogin" onSubmit={handleSubmit}>
				<label> UserId </label>
				<input value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="number" placeholder="UserId"/>

				<label for="email" > Email </label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gamil.com" id="email" name="email"/>

				<label for="password" > Password </label>
				<input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>

				<button type="submit">Log In</button>
			</form>
			<button className="link" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
		</div>

	)
}