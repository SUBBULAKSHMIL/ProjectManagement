import React, { useEffect, useState } from 'react'
import '../CSS/Aregister.css';
import { Link } from 'react-router-dom';


export const Aregister = (props) =>{
    const [email, setEmail]=useState('');
    const [name, setName]=useState('');
    const [gender, setGen]=useState('');
    const [dob, setDob]=useState('');
    const [number, setNum]=useState('');

    const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');
	const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e) =>{
		e.preventDefault();
		if (name === '' || email === ''  || gender==='' || dob==='' || number==='') {
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
				<h3 style={{color:"green"}}>User {name} has successfully registered</h3>
			</div>
		);
	};
	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h3 style={{color:"red",paddingRight:"22%"}}>Please enter all the fields</h3>
			</div>
		);
	};
    return ( 
        <div className="AReg-container">
            <div className='AReg-outer'>
            <div className='AReg-left'>
            <h1>Admin Registration</h1>
            <div className="errormessage" >
                {errorMessage()}
                {successMessage()}
            </div>
            
            <form className="fregister" onSubmit={handleSubmit}>
                <label style={{textAlign:"left"}} for="name"> Username </label><br/>
				<input  style={{height:"4vh",width:"40vh"}} value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" placeholder="Enter your Name"/><br/><br/>

				<label style={{textAlign:"left"}}for="email" > Email </label><br/>
				<input style={{height:"4vh",width:"40vh"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/><br/><br/>

                <label style={{textAlign:"left"}}> Gender</label><br/>
				<select style={{height:"5vh",width:"41vh"}} id="gender" value={gender} onChange={(e) => setGen(e.target.value)} required>
                                   <option value="">Select</option>
                                   <option value="Admin">Male</option>
                                   <option value="teamleader">Female</option>
                     	</select><br/><br/>

                <label style={{textAlign:"left"}}>Date of Birth</label><br/>
				<input style={{height:"5vh",width:"40.5vh"}} value={dob} onChange={(e) => setDob(e.target.value)} name="dob" id="dob" type="date" placeholder="Date of Birth"/><br/><br/>

                <label style={{textAlign:"left"}}>Mobile Number</label><br/>
				<input style={{height:"4vh",width:"40vh"}} value={number} onChange={(e) => setNum(e.target.value)} name="number" id="number" type="number" placeholder="Mobile Number"/><br/><br/>
				<div className="form-group">
                            <label htmlFor="agreeTerms">
                                   <input type="checkbox"
                                          id="agreeTerms"
                                          checked={agreeTerms}
                                          onChange={(e) => setAgreeTerms(e.target.checked)}
                                          required/>{' '}
                                          I agree to the terms and conditions
                                   </label>
	           </div><br/>
				<button style={{backgroundColor:"rgb(111, 101, 162)",height:"5vh",width:"41vh",border:"green"}}  type="submit">Register</button>
			</form><br/>

            <Link to='/Alogin'>Already have an account? Login</Link>
            </div>

            <div className='AReg-right'>
                
            </div>
            </div>
        </div>
     );
}