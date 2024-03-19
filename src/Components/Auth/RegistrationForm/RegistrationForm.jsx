import '../RegistrationForm/RegistrationFormStyle.css';
import { FaUser, FaLock } from "react-icons/fa";
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory } from 'react-router-dom';
import Navbar from '../../Navbars/Navbar_Landing.jsx';




function RegistrationForm  () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false); //agrees to Data Privacy Act of 2012

  const SignUp = async (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword( auth, email, password )    

      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      if (!agreedToTerms) {
        alert('Please agree to the terms and conditions.');
        return;
      }
            
      try {
        // Check if the email is already registered
        const existingUser = await auth.fetchSignInMethodsForEmail(email);
        if (existingUser.length > 0) {
          alert('This email is already registered. Please use a different email.');
          return;
        }
        
      // Register the user
      await auth.createUserWithEmailAndPassword(email, password);
      // User registered successfully
      setRegistrationSuccess(true); // Set success state to true
      setTimeout(() => {
        history.push('/Login'); // Redirect to login page after a delay
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  
  return (
    <>


    <Navbar/>

    <div className='welcome-message'>
      <h1>PlanIt
        <h1 className='logo-color'>FamIt</h1>
      </h1>
        <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.
          </p>
    </div>
    <div className= 'wrapper'>
      <form onSubmit={SignUp}>
        <h1>Let's get started.</h1>
        
        <h5> Create your account now and access the latest and most effective family planning solutions within reach.</h5>
        
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

        <div className="input-box password">
          <input type="password" placeholder='Confirm your password' 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} />
          <FaLock className='icon'/>
        </div>
        
        <label>
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={() => setAgreedToTerms(!agreedToTerms)}
        />
        I agree to the <a href="/terms">Terms and Conditions</a>
        </label>

        <button type="submit">Register</button>


        <div className="register-link">
          <p>Already have an account? <a href='/Login'> Login </a> </p>
        </div>

        <div className= "version">
          <p> PlanItFamIt v1.0.1 </p>
        </div>

        <div className= "reserved">
          <p> All rights reserved 2024.</p>
        </div>
      
      </form>
      {registrationSuccess && <p style={{ color: 'green' }}>Successfully registered! You can now log in.</p>}
    </div>
  </>  
  );
};



export default RegistrationForm;