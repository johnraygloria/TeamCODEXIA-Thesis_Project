// Page for resetting password

import React, { useState } from "react";
import { auth } from "../../../Config/firebase"; // Import your Firebase configuration
import Navbar from "../../Navbar/Navbar_Landing";
import "../LoginForm/PasswordResetFormStyle.css";

function PasswordResetForm() {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setResetSent(true);
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <>
      <Navbar/>
        <div>
          {resetSent ? (
            <p>Password reset email sent! Check your inbox.</p>
          ) : (
           
           <div className="reset-form">
              <form onSubmit={handleReset}>
              
              <div className="reset-heading">
              <h2>Reset Your Password</h2>
              <p> Type your email here. Make sure it is registered first or else it wouldn't be recovered!</p>
              </div>
              
              <div className="input-field">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Send Reset Email</button>
              </div>
            </form>
            </div>
          )}
        </div>
    </>
  );
}

export default PasswordResetForm;
