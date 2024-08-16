import React from 'react';
//import './LocalStories.css';

function LocalStories() {
  return (
    <section className="local-stories">
      <h2>Local Stories</h2>
      <div className="story">
        <img src="https://via.placeholder.com/150" alt="local story" />
        <div className="story-content">
          <h3>Local Story Title</h3>
          <div className="story-meta">
            <span>180 likes</span>
            <span>20 comments</span>
            <span>50 shares</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalStories;
