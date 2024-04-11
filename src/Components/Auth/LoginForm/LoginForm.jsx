import "../LoginForm/LoginFormStyle.css";
import { FaUser, FaLock } from "react-icons/fa";
import React, {useState, useEffect} from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory } from 'react-router-dom'; // React Router's useHistory hook
import Navbar from '../../Global/Navbar_Landing.jsx';


function LoginForm  ()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // New state for Remember Me
  const history = useHistory();



  useEffect(() => {         // Check if there are stored credentials and auto-fill the form
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);


  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (rememberMe) {
          // Store email in LocalStorage if Remember Me is checked
          localStorage.setItem("rememberedEmail", email);
        } else {
          // Clear stored email if Remember Me is not checked
          localStorage.removeItem("rememberedEmail");
        }
        // Redirect to the desired page after successful login
        history.push("/home"); // Change to your desired route
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
    <Navbar/>

    <div className='welcome-message'>
        <div className='welcome-message-bkg'>
          <h1>PlanIt
        <h1 className='logo-color'>FamIt</h1>
      </h1>
        <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.</p>
      </div >
    </div>
    
    
    <div className= 'wrapper' > 
      <form onSubmit={SignIn}>
        <h1>Welcome Back!</h1>
        
        <h5> Let's start exploring the beneficial ways of
          modern family planning here at PlanItFamIt!
        </h5>
        
        <div className="input-box" >
          <input type="email" placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}  />
          <FaUser className='icon' /> 
        </div>
        
        <div className="input-box password">
          <input type="password" placeholder='Enter your password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
        <label>
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Remember me
        </label>
        </div>

        <div className="forgot-password">
          <a href="/Resetyourpassword">Forgot Password?</a>
        </div>

        <button type="submit">Log In</button>

        <div className="register-link">
          <p>Don't have an account? <a href='/Register'> Register </a> </p>
        </div>

        <div className= "version">
          <p> PlanItFamIt v1.0.1 </p>
        </div>

        <div className= "reserved">
          <p> All rights reserved 2024.</p>
        </div>

      </form>
    </div>
    </>
  );
};


export default LoginForm;