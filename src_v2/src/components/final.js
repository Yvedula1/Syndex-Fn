import React from 'react';
import PopularSection from './PopularSection'; // Ensure this is the correct path to your PopularSection component
import './style.css'; // Ensure this is the correct path to your CSS file
import { useNavigate } from 'react-router-dom';

const Final = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/pub');
  }
  return (
    <div className="verticalbox">
      
        <button type="button" className="next-buttons" onClick={handleLoginClick}>Next</button>
     
      <PopularSection section='region' />
      <PopularSection section='publishers' />
      <PopularSection section='creators' />
    </div>
  );
};

export default Final;
