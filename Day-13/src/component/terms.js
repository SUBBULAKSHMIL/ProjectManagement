import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/terms.css'

function Terms() {
    return ( 
        <>
        <div className='terms'>
            <div className='tercont'>
                <h1 style={{textAlign:'center',textTransform:'uppercase'}}>
                    Terms and Conditions
                </h1>
                <p>
                    License:<br></br>
                    a. The System is licensed, not sold, to you for use strictly in accordance with these Terms.
                    <br></br>
                    b. You may use the System for personal or business purposes.
                    <br></br><br></br>
                    User Responsibilities:<br></br>
                    a. You are responsible for your System login credentials and any activities that occur under your account.
                    <br></br>
                    b. You agree not to use the System for any illegal, harmful, or unauthorized purposes.
                    <br></br><br></br>
                    System Functionality:<br></br>
                    a. The System is provided and the Developer does not guarantee that it will be error-free or uninterrupted.
                    <br></br>
                    b. The Developer reserves the right to modify, suspend, or discontinue the System or any part thereof without notice.
                    <br></br><br></br>
                    Data Privacy:<br></br>
                    a. The System may collect and store personal data in accordance with the Developer's Privacy Policy.
                    <br></br>
                    b. The Developer will make reasonable efforts to secure the data stored in the System, but cannot guarantee absolute security.
                    <br></br><br></br>
                    Governing Law:<br></br>
                    These Terms shall be governed by and construed in accordance with the laws, without regard to its conflict of laws principles.
                    <Link to='/eregister'><h3 style={{float:'right',paddingLeft:'150px'}}>return back</h3></Link>
                    <br></br><br></br><br></br>
                    </p>
            </div>
        </div>
        </>
     );
}

export default Terms;