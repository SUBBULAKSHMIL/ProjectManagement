import React, { useState } from "react";

export const Register = (props) =>{
    const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
    const [name, setName]=useState('');
    const [position, setPos]=useState('');
    const [dob, setDob]=useState('');
    const [number, setNum]=useState('');

    const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault();
		if (name === '' || email === '' || password === '' || position==='' || dob==='' || number==='') {
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
				<h1>User {name} has successfully registered :)</h1>
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
            <h2>Register</h2>
            <div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>
            <form className="fregister" onSubmit={handleSubmit}>
                <label> Username </label>
				<input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" placeholder="Full Name"/>

				<label for="email" > Email </label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gamil.com" id="email" name="email"/>

				<label for="password" > Password </label>
				<input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>

                <label> Position</label>
				<input value={position} onChange={(e) => setPos(e.target.value)} name="position" id="position" type="text" placeholder="Position"/>

                <label>Date of Birth</label>
				<input value={dob} onChange={(e) => setDob(e.target.value)} name="dob" id="dob" type="date" placeholder="Date of Birth"/>

                <label>Mobile Number</label>
				<input value={number} onChange={(e) => setNum(e.target.value)} name="number" id="number" type="number" placeholder="Mobile Number"/>


				<button type="submit">Register</button>
			</form>
            <button className="link" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
		
		</div>

	)
}