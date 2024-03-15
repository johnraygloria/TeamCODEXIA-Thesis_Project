import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';


import imglandingpage from '../../Assets/landing_page_bkg.jpg';

import "../LoginForm/LoginFormStyle.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Redirect user upon successful login
        history.push('/Home'); // Change '/dashboard' to the appropriate route
      })
      .catch((error) => {
        console.log(error);
        // Handle error appropriately, e.g., display error message
      });
  };

  return (
    <>
      <img className="imagelanding" src={imglandingpage} alt="Landing Page Background" />
      <Navbar />
      <div className='welcome-message'>
        <h1>PlanIt
          <span className='logo-color'>FamIt</span>
        </h1>
        <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.</p>
      </div>
      <div className='wrapper'>
        <form onSubmit={SignIn}>
          <h1>Welcome Back!</h1>
          <h5>Let's start exploring the beneficial ways of modern family planning here at PlanItFamIt!</h5>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <FaUser className='icon' />
          </div>
          <div className="input-box password">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type='checkbox' /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register-link">
            <p>Don't have an account? <a href='/Register'> Register </a> </p>
          </div>
          <div className="version">
            <p>PlanItFamIt v1.0.1</p>
          </div>
          <div className="reserved">
            <p>All rights reserved 2024.</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
