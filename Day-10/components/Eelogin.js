import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Elogin.css';
import { useDispatch } from 'react-redux';
import { login } from "../Features/user";
import { logout } from "../Features/user";
import { useSelector } from 'react-redux';

export const Eelogin = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const [id, setId] = useState('');
	const [submitted, setSubmitted] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();
	const navigate=useNavigate();

	const user = useSelector(state => state.user.value)

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(id);
		if (id === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	}

	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h2 style={{ color: "teal" }}>User {id} has successfully Logged In:)</h2>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				style={{
					display: error ? '' : 'none',
					textAlign: 'center',
					paddingTop: 10,
				}}>
				<h2 style={{ color: "	teal" }}>Please enter all the fields :(</h2>
			</div>
		);
	};

	return (
		<div className="Elog-container">
			<div className='Elog-outer'>
            <div className='Elog-left'>
				<div className="Emessage" >
					{errorMessage()}
					{successMessage()}
				</div>
				<form className="Elogin" onSubmit={handleSubmit} >
				<br/><br/><h2 style={{'fontSize':'30px'}} >Employee Log In</h2>
					<div className="Elog-uiform">
						<div className="Elog-field">
							<label> Username </label><br/>
							<input style={{height:"4vh",width:"40vh"}} value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="text" placeholder="UserName" required /><br/><br/>

							<label htmlFor="email"> Email </label>
							<input style={{height:"4vh",width:"40vh"}} className="input1" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required /><br/><br/>

							<label htmlFor="password"> Password </label>
							<input style={{height:"4vh",width:"40vh"}} value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" minLength="8" required /><br/><br/>
						</div>
					<Link to='/Asidebar'>
						<button type="submit" style={{height:"5vh",width:"41vh",backgroundColor:"rgb(61, 226, 157)",border:"green"}} className="Elog-button" onClick={() => { dispatch(login({ email }));navigate("/Asidebar") }} >Log In</button><br /><br />
					</Link>
					</div>
				</form>
				<Link to='/Eregister'>New User? Register</Link>
			</div>
			<div className='Elog-right'> 
            </div>
			</div>
			
		</div>
	)
}