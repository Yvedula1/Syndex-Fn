import React from 'react';
import './Advertisers.css'; // Import the CSS file
import AdImage1 from '../images/ad1.png'; // Import Ad images
import AdImage2 from '../images/ad2.png';
import AdImage3 from '../images/ad3.jpg';
import AdImage4 from '../images/ad7.png';
import AdImage5 from '../images/ad5.png';
import AdImage6 from '../images/ad6.jpg';

const advertisers = [
  { name: 'Ad 1', image: AdImage1 },
  { name: 'Ad 2', image: AdImage2 },
  { name: 'Ad 3', image: AdImage3 },
  { name: 'Ad 4', image: AdImage4 },
  { name: 'Ad 5', image: AdImage5 },
  { name: 'Ad 6', image: AdImage6 },
];

const Advertisers = () => {
  return (
    <div className="advertisers-container">
      <div className="advertisers-header">
        <div className="header-overlay">
          <div className="header-content">
            <div className="header-heading">
              <div className='left-column'>
              <h1>Join Other Advertisers</h1>
              </div>
            </div>
            <div className="header-line"></div>
            <div className="header-paragraph">
              <div className='right-column'>
              <p>
                Reach local audiences on a global scale, attract more readers, boost traffic, and generate revenue for your publication.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advertisers-wrapper">
        {advertisers.map((advertiser, index) => (
          <div className="advertiser-card" key={index}>
            <img src={advertiser.image} alt={advertiser.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisers;
