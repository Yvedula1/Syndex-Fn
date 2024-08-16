import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleClick = () => {
    navigate('/log');
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Syndex</div>
        
      </div>
      <h1 className="heading">LOCAL NEWS INFORMATION AGGREGATOR & CREATOR PLATFORM</h1>
      <div className="header-buttons">
        <button className="button red">Creators</button>
        <button className="button red" onClick={handleClick}>Publishers</button>
        <button className="button red">Advertisers</button>
       
      </div>
      <div class="container">
      <button className="login-button" onClick={handleLoginClick}>Log in</button>
  
</div>
    </header>
  );
};

export default Header;
