import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Log = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    navigate('/publisher'); // Navigate to the publisher page after sign-up
  };

  const handleLoginNavigation = () => {
    navigate('/account'); // Navigate to the login page
  };

  const handleNext = () => {
    navigate('/company'); // Navigate to the login page
  };


  return (
    <div className="signup-container">
      <div className="login-box">
        <div className="header">
          <h1>Sign Up</h1>
          <button onClick={handleLoginNavigation} className="login-link">
            Already have an account?
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit" onClick={handleNext}>Create Account</button>
        </form>
        <div className="separator">or</div>
        <button className="google-signup" onClick={handleNext}>Sign Up with Google</button>
        <button className="apple-signup" onClick={handleNext}>Sign Up with Apple</button>
      </div>
    </div>
  );
};

export default Log;
