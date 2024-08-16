import React from 'react';
import Sidebar from './Sidebar';
import NewsFeed from './NewsFeed';
import Head from './Head';
import './PublisherPage.css';
import SuggestedTopics from './SuggestedTopics';

const PublisherPage = () => {
  return (
    <div className="publisherPage">
        <Head />
      <div className="publisherPage__body">
        <Sidebar />
        <NewsFeed />
        <SuggestedTopics />
        
      </div>
    </div>
  );
};

export default PublisherPage;
