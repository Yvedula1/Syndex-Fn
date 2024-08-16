import React from 'react';
import './Heead.css';
import icon from  '../images/weather.png';
import search from '../images/search.png';
const Heead = () => {
    return (
        <div className="heead">
            <div className="logo">
                SYNDEX <span className="news">NEWS</span>
            </div>
            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder="ask Syndex AI" />
                <img src={search} alt="Search Icon" className="search-icon" />
            </div>
            <div className="right-section">
                <div className="weather">
                    <img src={icon} alt="Weather Icon" className="weather-icon" />
                    <span className="weather-info">North Bethesda ☀️ 69°F</span>
                </div>
                <div className="theme-switch">
                    <span>Theme:</span>
                    <button>Light</button>
                    <button>Dark</button>
                    <button>Auto</button>
                </div>
            </div>
        </div>
    );
}

export default Heead;
