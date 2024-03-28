// Modal pop-up form for 'forgot-password'

import React, { useState } from "react";
import { auth } from "../../../Config/firebase"; // Import your Firebase configuration

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
    <div>
      {resetSent ? (
        <p>Password reset email sent! Check your inbox.</p>
      ) : (
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Email</button>
        </form>
      )}
    </div>
  );
}

export default PasswordResetForm;
