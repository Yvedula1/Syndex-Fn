import React, { useState } from 'react';
import './Category.css'; // Ensure the correct path

const Category = ({ category, subcategories, onSelectSubcategory }) => {
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set());

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategories((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(subcategory)) {
        newSelected.delete(subcategory);
        onSelectSubcategory(subcategory, false);
      } else {
        newSelected.add(subcategory);
        onSelectSubcategory(subcategory, true);
      }
      return newSelected;
    });
  };

  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="subcategories">
        {subcategories.map((subcat, idx) => (
          <div
            key={idx}
            className={`subcategory ${selectedSubcategories.has(subcat) ? 'selected' : ''}`}
            onClick={() => handleSubcategoryClick(subcat)}
          >
            {subcat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
