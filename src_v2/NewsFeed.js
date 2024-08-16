import React from 'react';
import './NewsFeed.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="news-item">
        <h3>Joining Forces: How These Black Women in Media Inspire Inclusion</h3>
        <button>View full story</button>
      </div>
      <div className="news-item">
        <h3>Best Deals on Rental Cars - Search and Save with KAYAK®</h3>
        <button>View full story</button>
      </div>
      <div className="news-item">
        <h3>Ireland’s Prime Minister Leo Varadkar Resigns</h3>
        <button>View full story</button>
      </div>
      <div className="news-item">
        <h3>Strive Masiyiwa Spear Heads AI Solution to Businesses Across Africa</h3>
        <button>View full story</button>
      </div>
    </div>
  );
}

export default MainContent;
