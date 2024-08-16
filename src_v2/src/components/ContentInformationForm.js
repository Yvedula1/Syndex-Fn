import React from 'react';
import './ContentInformationForm.css';
import { useNavigate } from 'react-router-dom';
const ContentInformationForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/profile');
    };
  return (
    <div className="content-info-form">
      <h2 className="section-title">Section 3 : Content Information</h2>
      <form>
        <div className="form-group">
          <label>Brand/ Blog Name</label>
          <input type="text" placeholder="Brand/ Blog Name" />
        </div>
        <div className="form-group">
          <label>Main Content Category</label>
          <input type="text" placeholder="Main Content Category" />
        </div>
        <div className="form-group">
          <label>Content Audience</label>
          <input type="text" placeholder="Content Audience" />
        </div>
        <div className="form-group">
          <label>RSS Feed URL</label>
          <input type="url" placeholder="RSS Feed URL" />
        </div>
        <div className="form-group">
          <label>Number of Posts Per Week</label>
          <input type="number" placeholder="Number of Posts Per Week" />
        </div>
        <div className="form-group">
          <label>Site Required</label>
          <input type="text" placeholder="Site Required" />
        </div>
        <div className="form-actions">
          <button type="button" className="next-button"  onClick={handleClick}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default ContentInformationForm;
