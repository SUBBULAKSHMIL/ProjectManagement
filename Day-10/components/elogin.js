import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignInSchema } from './schema/loginSchema';
import UserAuthService from '../services/userAuthService';
import { useDispatch } from "react-redux";
import { addEmails,addToken } from '../components/Stores/masterSlice';
import '../CSS/Elogin.css';

const Elogin = () => {
  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message != "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          navigate("/Esidebar");
        }, 100);
      }
      else {
        <h1>Login failed:(</h1>
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className='Elog-container'>
      <div className='Elog-outer'>
      <div className='Elog-left'>
      <form className='flogin' onSubmit={handleSubmit}>
        <br/><br/><h1 style={{'fontSize':'30px'}}>Login</h1><br></br>
          {/* <label style={{ color: 'black' }}><b>Email</b></label><br></br> */}
          <br></br>
          <b>
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              type="text"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              style={{ marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}

          </b>
          <br></br>
          {/* <label style={{ color: 'black' }}><b>Password</b></label><br></br> */}
          <br></br>
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}

          <br></br>
          <br></br>
        <Box>
          <Button variant="contained" type='submit' style={{background:'powderblue',color:'black'}}>LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <h5>
          New User? {" "}
          <span>
            <a
              onClick={() => navigate("/eregister")}
              style={{ cursor: "pointer", color:"purple"}}
            >
              Sign Up
            </a>
          </span>{" "}
        </h5>
      </form>
      </div>
			<div className='Elog-right'> 
      </div>
			</div>
    </div>
  );
}

export default Elogin;
