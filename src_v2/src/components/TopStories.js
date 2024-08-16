import React from 'react';
//import './TopStories.css';

function TopStories() {
  return (
    <section className="top-stories">
      <h2>Top Stories</h2>
      <div className="story">
        <img src="https://via.placeholder.com/150" alt="top story" />
        <div className="story-content">
          <h3>Story Title</h3>
          <div className="story-meta">
            <span>292 likes</span>
            <span>40 comments</span>
            <span>50 shares</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopStories;
