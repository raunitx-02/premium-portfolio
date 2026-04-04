import React, { useState } from 'react';

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Explicitly using the provided token and fetched chat ID
    const BOT_TOKEN = "8691480653:AAEkoY1Z1lqwGCqd1a31XI6Am1iQR5zBYDo";
    const CHAT_ID = "8348945192";
    
    const formData = new FormData(e.target);
    
    const text = `🚀 *New Portfolio Lead!*
---------------------------
👤 *Name:* ${formData.get('firstName')} ${formData.get('lastName')}
📧 *Email:* ${formData.get('email')}
📱 *Phone:* ${formData.get('phone') || 'Not provided'}
💼 *Service:* ${formData.get('service')}

💬 *Message:*
${formData.get('message')}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });
      
      setSuccess(true);
      e.target.reset();
      
      setTimeout(() => {
        setSuccess(false);
        if (onClose) {
          onClose();
        }
      }, 2500);
      
    } catch (err) {
      alert("Something went wrong with Telegram! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group half">
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="John" required disabled={isSubmitting} />
        </div>
        <div className="form-group half">
          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Doe" required disabled={isSubmitting} />
        </div>
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="john@example.com" required disabled={isSubmitting} />
      </div>
      
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="+91 99999 99999" disabled={isSubmitting} />
      </div>
      
      <div className="form-group">
        <label>Service Needed</label>
        <select name="service" required defaultValue="" disabled={isSubmitting}>
          <option value="" disabled>Select a service...</option>
          <option value="WordPress Development">WordPress Development</option>
          <option value="E-Commerce Development">E-Commerce Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="SEO Optimization">SEO Optimization</option>
          <option value="Web Design & UI/UX">Web Design & UI/UX</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" placeholder="Tell me about your project..." required disabled={isSubmitting}></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn-submit hover-target" 
        disabled={isSubmitting}
        style={{ 
          backgroundColor: success ? 'var(--color-success)' : 'var(--color-accent-1)',
          pointerEvents: isSubmitting || success ? 'none' : 'auto',
          opacity: isSubmitting ? 0.7 : 1
        }}
      >
        {isSubmitting ? 'Sending to Telegram...' : success ? 'Message Sent! ✓' : 'Send Message →'}
      </button>
      <div className="form-footer-info">
        Expected response time: Usually within an hour ⚡
      </div>
    </form>
  );
};

export default ContactForm;
