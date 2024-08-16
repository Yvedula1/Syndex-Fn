import React from 'react';
import './CompanyInformation.css';
import { useNavigate } from 'react-router-dom';

const CompanyInformationForm = () => {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/content');
  };
  return (
    <div className="company-info-form">
      <h2 className="section-title">Section 2 : Company Information</h2>
      <form>
        <div className="form-group">
          <label>Company Name (if applicable, otherwise put N/A)</label>
          <input type="text" placeholder="Company Name" />
        </div>
        <div className="form-group">
          <label>Company Website</label>
          <input type="url" placeholder="Company Website" />
        </div>
        <div className="form-group">
          <label>Company Address (optional)</label>
          <input type="text" placeholder="Company Address" />
        </div>
        <div className="form-group">
          <label>Address Line 1</label>
          <input type="text" placeholder="Address Line 1" />
        </div>
        <div className="form-group">
          <label>Address Line 2</label>
          <input type="text" placeholder="Address Line 2" />
        </div>
        <div className="form-group">
          <label>State</label>
          <select>
            <option value="NT">NT</option>
            {/* Add other states as options here */}
          </select>
          <label>ZIP</label>
          <input type="text" placeholder="ZIP" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <div className="country-input">
            <span role="img" aria-label="flag">🇺🇸</span>
            <input type="text" value="United States" readOnly />
            <select>
              {/* Add other countries as options here */}
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="next-button" onClick={handleLoginClick}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInformationForm;
