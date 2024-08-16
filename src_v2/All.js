import React from 'react';
import TopStories from './TopStories';
import LocalStories from './LocalStories';
import ForYouTabs from './ForYouTabs';
import StartPost from './StartPost';
import YourTopics from './YourTopics';
import './All.css';

function All() {
  return (
    <div className="main-content">
      <TopStories />
      <LocalStories />
      <ForYouTabs />
      <StartPost />
      <YourTopics />
    </div>
  );
}

export default All;
