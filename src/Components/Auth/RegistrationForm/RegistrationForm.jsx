import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory } from "react-router-dom";
import Navbar from "../../Global/Navbar_Landing.jsx";
import Modal from "react-modal";
import { FaUser, FaLock } from "react-icons/fa";
import "./RegistrationFormStyle.css"; 

import background1 from '../../Assets/landing_page_bkg1.png'
import background2 from '../../Assets/landing_page_bkg2.png'

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setModalIsOpen(true);
  // };
  const openModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setAgreedToTerms(true);
    setModalIsOpen(false);
  };

  const SignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!agreedToTerms) {
      openModal();
      return;
    }

    const auth = getAuth(); // Get the auth instance

    try {
      // Check if the email is already registered
      const existingUser = await fetchSignInMethodsForEmail(auth, email);
      if (existingUser.length > 0) {
        alert("This email is already registered. Please use a different email.");
        return;
      }

      // Register the user
      await createUserWithEmailAndPassword(auth, email, password);
      // User registered successfully
      setRegistrationSuccess(true);
      setTimeout(() => {
        history.push("/Login"); // Redirect to login page after a delay
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  
  return (
    <>

    {/* <Navbar/> */}

      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Terms and Conditions"
      style={{
        content: {
        width: '40%', // Adjust the width of the modal
        height: '85%', // Adjust the height of the modal
        margin: 'auto', // Center the modal
      },
    }}
>
  
      <section class="flex_center">
        <div class="tc_main">
          <div class="tc_content">
            <div class="tc_top">
              <div class="icon">
                <i class="fa-solid fa-clipboard"></i>
              </div>
              <div class="title">
                <p>Data Privacy Act of 2012</p>
              </div>
              <div class="info">
              In compliance with the Data Privacy Act of 2012 in the Philippines, the website application is committed to safeguarding the personal information of the users. Adhering to the principles of transparency, legitimate purpose, and proportionality as 
              mandated by the Act. Implementing robust organizational, physical, and technical security measures to protect personal data against unauthorized access, alteration, and disclosure. 
              <br/> Furthermore, respecting the rights of data subjects by providing mechanisms for data access, correction, and erasure as stipulated in 
              the Act. The commitment to data privacy is unwavering, and continuously monitoring the practices to align with the National Privacy Commission's standards and regulations.
              </div>
            </div>
            <div class="tc_bottom">
              <div class="title">
                <p>Terms and Conditions</p>
              </div>
              <div class="info">
                <p> 1. Purpose and Scope
                    <br/> The PlantItFamIt application ("the App") provides family planning services, appointment scheduling, chatbot assistance, and menstrual cycle tracking.
                    By using the App, patients agree to comply with these terms and conditions. </p>

                <p> 2. Data Privacy and Security
                    <br/> We adhere to the Data Privacy Act of 2012 in the Philippines.
                    Patient data is collected for specified and legitimate purposes only.
                    Personal information is processed fairly, lawfully, and retained as necessary.
                    Robust security measures protect against unauthorized access, alteration, and disclosure.</p>

                <p> 3. User Responsibilities
                    <br/> Patients must use the App responsibly and follow guidelines. 
                    Any misuse or violation may result in account suspension or legal action.</p>

                <p> 4. Intellectual Property  Rights
                    <br/> The App and its content are protected by intellectual property rights laws.  
                    Users may not copy, distribute, or modify the software without written permission from the developer.
                    Users may not modify, adapt, translate, or create derivative works from any part of the App without explicit permission from the owners of such
                    Unauthorized copying, distribution, modification, or sale of any part of the App  
                    is strictly prohibited. </p>

                <p> 5. Disclaimers and Warranties
                  <br/> We provide accurate information, but users should consult healthcare professionals for personalized advice.
                  The App does not guarantee specific outcomes or results.</p>

                <p> 6. Access and Amendments
                    <br/> Patients can access, correct, or request erasure of their data.
                    Contact our support team for assistance.</p>

                <p> By using the PlantItFamIt application, patients acknowledge and accept these terms and conditions.</p>
              </div>
            </div>
          </div>
          <div class="tc_btns">
          <button className={'accept'} onClick={closeModal}>Agree and Close</button>
          </div>
        </div>
      </section>
      
      </Modal>

      <div className='welcome-message'>
    <img src={background1} alt="" />
        <div className='welcome-message-bkg'>
          <h1>PlanIt<span>FamIt</span></h1>
        <p>Approachable modern family planning methods for partners
           and families here in the Philippines.</p>
      </div >
</div>
<div className="wrapper-register-page">
    <div className= 'wrapper-register'>
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
        
        <label htmlFor="checkboxId">
  <input
    type="checkbox"
    id="checkboxId"
    checked={agreedToTerms}
    onChange={() => setAgreedToTerms(!agreedToTerms)}
  />
  I agree to the <a href="#" onClick={openModal}>Terms and Conditions</a>
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
    </div>

    {/* <div className="landingpagebkg">
        <div className="flex-landingbkg1">
          <img src={background1} alt="background2"  />
          </div>
        <div className="flex-landingbkg2" >
          <img src={background2} alt="background1" />
        </div>
    </div> */}
  </>  
  );
};

export default RegistrationForm;