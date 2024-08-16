import React, { useEffect, useRef } from 'react';
import './JoinCreators.css'; // Import the CSS file
import LizImage from '../images/Liz.jpg'; // Import Liz's image
import AImage from '../images/A.jpg'; // Import A's image
import BImage from '../images/B.jpg'; // Import B's image
import CImage from '../images/C.jpg'; // Import C's image
import DImage from '../images/D.jpg'; // Import D's image
import EImage from '../images/E.jpg'; // Import E's image

const creators = [
  {
    name: 'Liz',
    role: 'Project Manager',
    responsibilities: ['Content Creation', 'Hosting', 'Networking'],
    image: LizImage // Use imported image variable
  },
  {
    name: 'A',
    role: 'Developer',
    responsibilities: ['Coding', 'Reviewing', 'Debugging'],
    image: AImage // Use imported image variable
  },
  {
    name: 'B',
    role: 'Designer',
    responsibilities: ['Designing', 'Prototyping', 'User Testing'],
    image: BImage // Use imported image variable
  },
  {
    name: 'C',
    role: 'FilmMaker',
    responsibilities: ['Filmmaking', 'Editing', 'Storyboarding'],
    image: CImage // Use imported image variable
  },
  {
    name: 'D',
    role: 'Designer',
    responsibilities: ['Graphic Design', 'Illustration', 'User Interface'],
    image: DImage // Use imported image variable
  },
  {
    name: 'E',
    role: 'Designer',
    responsibilities: ['UI/UX Design', 'Wireframing', 'User Testing'],
    image: EImage // Use imported image variable
  },
];

const JoinCreators = () => {
  const scrollRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };

    scrollInterval = setInterval(scroll, 30); // Adjust the interval as needed

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => scrollInterval = setInterval(scroll, 30);

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('mouseenter', handleMouseEnter);
      scrollElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearInterval(scrollInterval);
      if (scrollElement) {
        scrollElement.removeEventListener('mouseenter', handleMouseEnter);
        scrollElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="join-creators-container">
      <div className="content-wrapper">
        <div className="heading-content">
          <div className='left-column'>
            <h1>Join Other Creators</h1>
          </div>
        </div>
        <div className="text-content">
          <div className='right-column'>
            <p>
              Join other global & local creators and journalists to: Share your stories, Reach new audiences, and Build communities all while Earning
            </p>
          </div>
        </div>
      </div>
      <div className="creators-wrapper" ref={scrollRef}>
        {creators.concat(creators).map((creator, index) => (
          <div className="creator-card" key={index}>
            <div
              className="image-container"
              style={{ backgroundImage: `url(${creator.image})` }} // Inline background image
            >
              <div className="image-overlay">
                <h2 className="creator-name">{creator.name}</h2>
                <p className="creator-role">{creator.role}</p>
                <div className="roles-container">
                  {creator.responsibilities.map((responsibility, idx) => (
                    <div className="role-box" key={idx}>{responsibility}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinCreators;
