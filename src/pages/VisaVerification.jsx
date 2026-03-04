import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal'; // New Import

export default function VisaVerification({ onBack }) {
  const [formData, setFormData] = useState({
    familyName: '',
    nationality: '',
    passportNumber: '',
    dob: '',
    gender: '',
    visaStartDate: '',
    consent: true
  });

  // Modal State Logic
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleFinalSubmit = () => {
    setIsModalOpen(false);
    console.log("Submitting Verification:", formData);
    alert("Visa verification request sent successfully!");
  };

  return (
    <div className="visa-container">
      <button className="back-btn" onClick={onBack}>
        <span className="arrow">←</span> Go Back
      </button>

      <h2 className="visa-header-title">Visa Verification Enquiry</h2>
      
      <p className="visa-instruction-text">Enter the details of the visa to be verified.</p>
      <p className="visa-instruction-text">
        Please enter these details exactly as they appear in the visa holder's current passport.
      </p>

      {/* Form now triggers handleOpenModal instead of direct submission */}
      <form className="visa-form-box" onSubmit={handleOpenModal}>
        <div className="visa-input-group">
          <label>Family Name <span className="req">*</span> :</label>
          <input 
            type="text" className="visa-field" value={formData.familyName}
            onChange={(e) => setFormData({...formData, familyName: e.target.value})}
            required
          />
        </div>

        <div className="visa-input-group">
          <label>Passport Nationality <span className="req">*</span> :</label>
          <select 
            className="visa-field" value={formData.nationality}
            onChange={(e) => setFormData({...formData, nationality: e.target.value})}
            required
          >
            <option value="">Select Nationality</option>
            <option value="Nepal">Nepal</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </div>

        <div className="visa-input-group">
          <label>Passport Number <span className="req">*</span> :</label>
          <input 
            type="text" className="visa-field" value={formData.passportNumber}
            onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
            required
          />
        </div>

        <div className="visa-input-group">
          <label>Date of Birth (dd/mm/yy) <span className="req">*</span> :</label>
          <input 
            type="date" className="visa-field" value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
            required
          />
        </div>

        <div className="visa-input-group">
          <label>Gender <span className="req">*</span> :</label>
          <select 
            className="visa-field" value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value})}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="visa-input-group">
          <label>Visa Start Date (dd/mm/yy) <span className="req">*</span> :</label>
          <input 
            type="date" className="visa-field" value={formData.visaStartDate}
            onChange={(e) => setFormData({...formData, visaStartDate: e.target.value})}
            required
          />
        </div>

        <div className="visa-consent-section">
          <input 
            type="checkbox" id="consent-check" checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
            required
          />
          <label htmlFor="consent-check">The visa holder has consented to this check.</label>
        </div>

        <button type="submit" className="visa-submit-btn">Check Visa Status</button>
      </form>

      {/* The Animated Popup logic */}
      <ConfirmationModal 
        isOpen={isModalOpen} 
        onConfirm={handleFinalSubmit} 
        onCancel={() => setIsModalOpen(false)} 
      />
    </div>
  );
}