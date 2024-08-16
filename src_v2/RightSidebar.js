import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <section className="podcasts">
        <h2>Live on Podcasts</h2>
        <ul>
          <li>Tesla’s profits sink as the company struggles with cooling demand</li>
          <li>How Africans in the U.S Diaspora Can Celebrate Juneteenth</li>
          <li>Here is where live audio conversations about any news or articles appear</li>
          
        </ul>
      </section>
      <section className="suggested-for-you">
        <h2>Suggested for You</h2>
        <ul>
          <li>
            <div className="suggested-user">
              <span>Folashade Omish</span>
              <button>Subscribe</button>
            </div>
          </li>
          <li>
            <div className="suggested-user">
              <span>Oluwanifemi Omo</span>
              <button>Subscribe</button>
            </div>
          </li>
          <li>
            <div className="suggested-user">
              <span>Anwiva Buachie</span>
              <button>Subscribe</button>
            </div>
          </li>
          <li>
            <div className="suggested-user">
              <span>@Onxeii</span>
              <button>Subscribe</button>
            </div>
          </li>
        </ul>
      </section>
      <section className="local-news">
        <h2>Local News</h2>
        <ul>
          <li>Terence Blanchard, composer of Spike Lee movie masterpieces, brings opera</li>
          <li>Matt About Town: Meet 17-year-old Page, who used his Make-A-Wish experience to</li>
          <li>Navigating the Summer Shutdown: Metro’s Red Line Bus Shuttle Plan</li>
        </ul>
      </section>
      <section className="whats-happening">
        <h2>What's Happening</h2>
        <ul>
          <li>Diamondbacks at Cardinals</li>
          <li>Morgan Freeman</li>
          <li>Neosporin</li>
          <li>McConnell</li>
          <li>Crackhead Barney</li>
        </ul>
      </section>
    </div>
  );
}

export default RightSidebar;
