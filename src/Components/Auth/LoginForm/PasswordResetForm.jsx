// Page for resetting password

import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar_Landing";
import "../LoginForm/PasswordResetFormStyle.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PasswordResetForm() {
  const history = useHistory();

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth,emalVal).then(data=>{
        alert("Check your email, refresh if needed!")
        history("/")
    }).catch(err=>{
        alert(err.code)
    })
}

  return (
    <>
      <Navbar/>
        <div>
           <div className='welcome-message'>
            <h1>PlanIt
              <h1 className='logo-color'>FamIt</h1>
            </h1>
          <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.</p>
        </div >
           
           <div className="reset-form">
              <form onSubmit={(e)=>handleSubmit(e)}>
              
              <div className="reset-heading">
              <h2>Reset Your Password</h2>
              <p> Type your email here. Make sure the used email is registered first.</p>
              </div>
              
              <div className="input-field">
              <input type="email" name="email" placeholder="Enter your email" />
              </div>
              <button type="submit">Send Reset Email</button>

              <div className="go-back">
                <p> Go, back  to login page? Click <a href="/Login">here.</a></p> 
              </div>
            </form>
          </div>
      </div>
    </>
  );
}

export default PasswordResetForm;
