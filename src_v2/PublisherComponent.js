import React from 'react';
import './PublisherComponent.css'; // Import the CSS file
import PublisherLogo1 from '../images/publisher1.png'; // Example publisher logo
import PublisherLogo2 from '../images/publisher2.png'; // Example publisher logo
import PublisherLogo3 from '../images/publisher3.png'; // Example publisher logo
import PublisherLogo4 from '../images/publisher4.png'; // Example publisher logo
import PublisherLogo5 from '../images/publisher5.png';
import PublisherLogo6 from '../images/publisher6.png';

const publishers = [
  { logo: PublisherLogo1 },
  { logo: PublisherLogo2 },
  { logo: PublisherLogo3 },
  { logo: PublisherLogo4 },
  { logo: PublisherLogo5},
  { logo: PublisherLogo6 }
];

const PublisherComponent = () => {
  return (
    <div className="publishers-container">
      <div className="columns-container">
        <div className="left-column">
          <h1>Join Other Publishers</h1>
        </div>
        <div className="right-column">
          <p>
            Reach local audiences on a global scale, attract more readers, boost traffic, and generate revenue for your publication.
          </p>
        </div>
      </div>
      <div className="logos-container">
        {publishers.map((publisher, index) => (
          <div className="publisher-logo" key={index}>
            <img src={publisher.logo} alt={`Publisher ${index + 1}`} className="publisher-logo-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublisherComponent;
