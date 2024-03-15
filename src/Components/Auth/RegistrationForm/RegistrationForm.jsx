import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Config/firebase";
import { useHistory, Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import imglandingpage from "../../Assets/landing_page_bkg.jpg";
import "./RegistrationFormStyle.css"; // Assuming this is the correct path to your CSS file

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const history = useHistory();

  const SignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setRegistrationSuccess(true);
      history.push("/Login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please use a different email.");
      } else {
        console.error("Error registering user:", error.message);
      }
    }
  };

  return (
    <>
      <img className="imagelanding" src={imglandingpage} alt="" />
      <Navbar />
      <div className="welcome-message">
        <h1>
          PlanIt
          <h1 className="logo-color">FamIt</h1>
        </h1>
        <p>
          Approachable modern family planning methods for partners <br /> and families here in the Philippines.
        </p>
      </div>
      <div className="wrapper">
        <form onSubmit={SignUp}>
          <h1>Let's get started.</h1>
          <h5>Create your account now and access the latest and most effective family planning solutions within reach.</h5>
          <div className="input-box">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FaUser className="icon" />
          </div>
          <div className="input-box password">
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>
          <div className="input-box password">
            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>
          <label>
            <input type="checkbox" checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)} />
            I agree to the <Link to="/terms">Terms and Conditions</Link>
          </label>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
          <div className="version">
            <p>PlanItFamIt v1.0.1</p>
          </div>
          <div className="reserved">
            <p>All rights reserved 2024.</p>
          </div>
        </form>
        {registrationSuccess && <p style={{ color: "green" }}>Successfully registered! You can now log in.</p>}
      </div>
    </>
  );
};

export default RegistrationForm;
