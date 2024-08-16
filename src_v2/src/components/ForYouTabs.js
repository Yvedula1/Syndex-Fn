import React, { useRef } from 'react';
//import './ForYouTabs.css';

function ForYouTabs() {
  const tabContainerRef = useRef(null);

  const scrollLeft = () => {
    tabContainerRef.current.scrollBy({
      top: 0,
      left: -100, // Adjust this value as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    tabContainerRef.current.scrollBy({
      top: 0,
      left: 100, // Adjust this value as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="for-you-tabs-wrapper">
      <button className="scroll-arrow left" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="tabs" ref={tabContainerRef}>
        <button>For You</button>
        <button>Following</button>
        <button>Trending</button>
        <button>Life</button>
        <button>Self-development</button>
        <button>Arts and Culture</button>
        <button>Self-love</button>
        <button>Mental Health</button>
      </div>
      <button className="scroll-arrow right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
}

export default ForYouTabs;
