import React from 'react';
import Heead from './Heead';
import Sibar from './Sibar';
import StartPost from './StartPost';
import All from './All';
import YourTopics from './YourTopics';
import TopStories from './TopStories';
import ForYouTabs from './ForYouTabs';
import RightSidebar from './RightSidebar';
import LocalStories from './LocalStories';
import './Fi.css';

function Fi() {
  return (
    <div className="app">
      <Heead />
      <div className="content">
        <Sibar className="sidebar" />
        <div className="main-content">
          
          <All />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Fi;
