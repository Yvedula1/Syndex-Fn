import React from 'react';
import PublisherLogo1 from '../images/Logo1.png';
import search from '../images/search.png';
import account from '../images/account.png';
import settings from '../images/settings.png';
import notification from '../images/notification.png';
import './Head.css';

const Head = () => {
  return (
    <header className="head">
      <div className="head-top">
        <div className="head-left">
          <img src={PublisherLogo1} alt="Logo" className="logo" />
          <span className="brand-name">syndex</span>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search the web" className="search-bar" />
          <img src={search} alt="Search" className="search-icon" />
        </div>
        <div className="header-right">
          <img src={account} alt="User" className="icon username" />
          <img src={settings} alt="Settings" className="icon settings" />
          <img src={notification} alt="Notifications" className="icon notifications" />
        </div>
      </div>
      <nav className="nav-links">
        <a href="#">Discover</a>
        <a href="#">Following</a>
        <a href="#">News</a>
        <a href="#">US News</a>
        <a href="#">World News</a>
        <a href="#">Local</a>
        <a href="#">Science</a>
        <a href="#">Technology</a>
        <a href="#">Crime</a>
        <a href="#">Politics</a>
        <a href="#">Entertainment</a>
        <a href="#">Lifestyle</a>
        <a href="#">Food & Drink</a>
        <button className="personalize-button">Personalize</button>
      </nav>
    </header>
  );
};

export default Head;
