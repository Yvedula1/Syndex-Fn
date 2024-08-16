import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="publisher-info">
        <h2>TANTV News (English)</h2>
        <p>9 Followers</p>
        <p>Smart Journalism for the African Diaspora. We advance...</p>
        <a href="https://www.tantvstudios.com">https://www.tantvstudios.com</a>
      </div>
      <div className="suggested-topics">
        <h3>Suggested topics</h3>
        <ul>
          <li>Technology</li>
          <li>Celebrities</li>
          <li>Animals</li>
          <li>Politics</li>
          <li>Soccer</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
