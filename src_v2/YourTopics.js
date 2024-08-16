import React from 'react';

function YourTopics() {
  return (
    <section className="your-topics">
      <h2>Your Topics</h2>
      <div className="story">
        <img src="https://via.placeholder.com/150" alt="your topic story" />
        <div className="story-content">
          <h3>Topic Story Title</h3>
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

export default YourTopics;
