import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import './CategoryContainer.css'; // Ensure the correct path

const categories = {
  headlineNews: ['U.S.', 'World', 'Politics'],
  scienceNews: ['Science', 'Space', 'Wildlife', 'Environment', 'Neuroscience', 'Physics', 'Geology', 'Paleontology', 'Social sciences'],
  sportsNews: ['Sports', 'Soccer', 'Cycling', 'Motor sports', 'Tennis', 'Combat sports', 'Basketball', 'Baseball', 'Football', 'Sports betting', 'Water sports', 'Hockey', 'Golf', 'Cricket', 'Rugby'],
  technologyNews: ['Technology', 'Mobile', 'Energy', 'Gaming', 'Internet security', 'Gadgets', 'Virtual Reality', 'Robotics'],
  healthNews: ['Health', 'Nutrition', 'Public health'],
  educationNews: ['Education', 'Jobs', 'Higher education'],
  businessNews: ['Business', 'Economy', 'Personal Finance', 'Finance', 'Digital currencies'],
  entertainmentNews: ['Entertainment', 'Celebrities', 'TV', 'Music', 'Movies', 'Theater'],
  lifestyleNews: ['Vehicles', 'Arts & design', 'Beauty', 'Food', 'Travel', 'Shopping', 'Home', 'Outdoors', 'Fashion']
};

const CategoryContainer = () => {
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set());
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/final');
  };

  const handleSubcategorySelect = (subcategory, isSelected) => {
    setSelectedSubcategories((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (isSelected) {
        newSelected.add(subcategory);
      } else {
        newSelected.delete(subcategory);
      }
      return newSelected;
    });
  };

  return (
    <div className="category-container">
      <h1 className="heading">INTERESTS</h1>
      <div className="categories-wrapper">
        {Object.entries(categories).map(([category, subcategories], idx) => (
          <Category
            key={idx}
            category={category}
            subcategories={subcategories}
            onSelectSubcategory={handleSubcategorySelect}
          />
        ))}
      </div>
      {selectedSubcategories.size > 0 && (
        <button className="next-button" onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
};

export default CategoryContainer;
