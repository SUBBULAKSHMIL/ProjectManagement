import React from 'react'
import '../CSS/Frontpage.css';
import { Link } from 'react-router-dom';
function Frontpage() {
    return ( 
        <div className='front'>
            <p style={{fontSize:'45px',marginTop:'20%',marginLeft:'5%'}}>
                Welcome to Creo
            </p>
             <Link to='/Firstpage'>
                        <button className='front-button' style={{width:"20%",height:"7vh",marginLeft:"10%",color:'black',background:'green',marginTop:'20%',marginLeft:'5%'}}>Get Started</button>
                </Link>
        </div>
     );
}

export default Frontpage;