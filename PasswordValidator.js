import React, { useState } from "react";
import "./PasswordValidator.css";

function PasswordValidator() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    // Perform password validation logic here (e.g., check length, complexity)
    // For demonstration purposes, let's check if the password is at least 8 characters long
    return password.length >= 8;
  };

  return (
    <div className="password-validator">
      <h2>Password Validator</h2>
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <button className="eye-button" onClick={togglePasswordVisibility}>
          {showPassword ? "👁️" : "👁️‍🗨️"}
        </button>
      </div>
      <div className="validation-message">
        {password && !validatePassword() && (
          <span className="error-message">
            Password must be at least 8 characters long
          </span>
        )}
      </div>
    </div>
  );
}

export default PasswordValidator;
