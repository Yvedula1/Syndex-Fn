import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    navigate('/publisher'); // Navigate to the publisher page after sign-up
  };
  const handleLoginNavigation = () => {
    navigate('/account'); // Navigate to the login page
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
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" onClick={handleSubmit}>Create Account</button>
        </form>
        <div className="separator">or</div>
        <button className="google-signup" onClick={handleSubmit}>Sign Up with Google</button>
        <button className="apple-signup" onClick={handleSubmit}>Sign Up with Apple</button>
      </div>
    </div>
  );
};

export default SignUp;
