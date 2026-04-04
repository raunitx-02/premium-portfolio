import React from 'react';

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only form submission simulation
    alert("Form submission simulated. Backend not connected.");
    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group half">
          <label>First Name</label>
          <input type="text" placeholder="John" required />
        </div>
        <div className="form-group half">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" required />
        </div>
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="john@example.com" required />
      </div>
      
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="+91 99999 99999" />
      </div>
      
      <div className="form-group">
        <label>Service Needed</label>
        <select required defaultValue="">
          <option value="" disabled>Select a service...</option>
          <option value="wordpress">WordPress Development</option>
          <option value="ecommerce">E-Commerce Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="seo">SEO Optimization</option>
          <option value="design">Web Design & UI/UX</option>
          <option value="social">Social Media Marketing</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Tell me about your project..." required></textarea>
      </div>
      
      <button type="submit" className="btn-submit hover-target">
        Send Message →
      </button>
      <div className="form-footer-info">
        Usually responds within 24 hours ⚡
      </div>
    </form>
  );
};

export default ContactForm;
