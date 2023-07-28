import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { useDispatch, useSelector } from 'react-redux';

function Mlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      window.location.href = '/ehome'; 
    }
  };

  const dispatch = useDispatch();
	const navigate=useNavigate();

	const {user }= useSelector(state => state.master)
  return (
    <div className='wholelogin'>
      <form className='login' onSubmit={handleSubmit}>
        <center>
          <h1 style={{ color: 'purple',fontFamily:'cursive' }}>Login</h1><br></br>
          <label style={{ color: 'black' }}><b>Email</b></label><br></br>
          <br></br>
          <b>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              style={{borderColor:'black'}}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
            /><br />
          </b>
          <br></br>
          <label style={{ color: 'black' }}><b>Password</b></label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={!!passwordError}
            helperText={passwordError}
          /><br />
          <br></br>
          <br></br>
        </center>
        <Box textAlign="center">
          <Button variant="contained" color="success" type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <h4><center>Don't have an Account? <Link to="/register">Signup</Link></center></h4>
      </form>
    </div>
  );
}

export default Mlogin;
