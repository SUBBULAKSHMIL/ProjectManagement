import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Components/Style/register.css';

export const Register = (props) =>{
    const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
    const [name, setName]=useState('');
    const [position, setPos]=useState('');
    const [dob, setDob]=useState('');
    const [number, setNum]=useState('');

    const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

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
				<h2 style={{color:"teal"}}>User {name} has successfully registered :)</h2>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h2 style={{color:"teal"}}>Please enter all the fields :(</h2>
			</div>
		);
	};

	return(
        <div className="all">
		<div className="container">
            <h2>Register</h2>
            <div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>
            <form className="fregister" onSubmit={handleSubmit}>
                <label for="name"> Username </label>
				<input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" placeholder="Full Name"/>

				<label for="email" > Email </label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

				<label for="password" > Password </label>
				<input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" minlength="8"/>

                <label > Position</label>
				<select id="position" value={position} onChange={(e) => setPos(e.target.value)} required>
                                   <option value="">Select</option>
                                   <option value="admin">Admin</option>
                                   <option value="employee">Employee</option>
                            </select>

                <label>Date of Birth</label>
				<input value={dob} onChange={(e) => setDob(e.target.value)} name="dob" id="dob" type="date" placeholder="Date of Birth"/>

                <label>Mobile Number</label>
				<input value={number} onChange={(e) => setNum(e.target.value)} name="number" id="number" type="tel" placeholder="Mobile Number" />

                <div className="form-group">
                            <label htmlFor="agreeTerms">
                                   <input type="checkbox"
                                          id="agreeTerms"
                                          checked={agreeTerms}
                                          onChange={(e) => setAgreeTerms(e.target.checked)}
                                          required/>{' '}
                                          I agree to the terms and conditions
                                   </label>
                            </div>
				<button type="submit">Register</button><br/><br/>
			</form>
            <Link to='/login1'>Already have an account? Login here.</Link>
		
		</div>
        </div>
	)
}