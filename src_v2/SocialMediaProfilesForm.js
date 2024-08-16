import React from 'react';
import './SocialMediaProfilesForm.css';
import { useNavigate } from 'react-router-dom';


const SocialMediaProfilesForm = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/fi');
  }
  return (
    <div className="social-media-profiles-form">
      <h2 className="section-title">Section 4 : Social Media Profiles </h2>
      <form>
        <div className="form-group">
          <label>Twitter URL</label>
          <input type="url" placeholder="Twitter URL" />
        </div>
        <div className="form-group">
          <label>Instagram URL</label>
          <input type="url" placeholder="Instagram URL" />
        </div>
        <div className="form-group">
          <label>Facebook URL</label>
          <input type="url" placeholder="Facebook URL" />
        </div>
        <div className="form-group">
          <label>TikTok URL</label>
          <input type="url" placeholder="TikTok URL" />
        </div>
        <div className="form-group">
          <label>YouTube URL</label>
          <input type="url" placeholder="YouTube URL" />
        </div>
        <div className="form-group">
          <label>LinkedIn URL</label>
          <input type="url" placeholder="LinkedIn URL" />
        </div>
        <div className="form-group">
          <label>Pinterest URL</label>
          <input type="url" placeholder="Pinterest URL" />
        </div>
        <div className="form-actions">
          <button type="button" className="next-button" onClick={handleLoginClick}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default SocialMediaProfilesForm;
