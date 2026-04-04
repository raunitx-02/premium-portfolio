import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, DollarSign } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Let's Work Together" 
          subtitle="I design and code beautifully simple things and I genuinely love what I do." 
        />
        
        <div className="contact-content">
          {/* Left Column - Form */}
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
          
          {/* Right Column - Info */}
          <motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="info-title">Get In Touch</h3>
            <p className="info-desc">
              Whether you have a project in mind, want to collaborate on a startup idea, or just want to say hi — my inbox is always open.
            </p>
            
            <div className="info-cards-stack">
              <a href="tel:+917292858748" className="info-card hover-target">
                <div className="info-card-icon"><Phone size={20} /></div>
                <div className="info-card-content">
                  <h4>Phone</h4>
                  <p className="primary-text">+91 72928 58748</p>
                  <p className="secondary-text">Available 10AM–8PM IST</p>
                </div>
              </a>
              
              <a href="mailto:contact@raunitx.online" className="info-card hover-target">
                <div className="info-card-icon"><Mail size={20} /></div>
                <div className="info-card-content">
                  <h4>Email</h4>
                  <p className="primary-text">contact@raunitx.online</p>
                  <p className="secondary-text">For project inquiries</p>
                </div>
              </a>
              
              <div className="info-card hover-target">
                <div className="info-card-icon"><DollarSign size={20} /></div>
                <div className="info-card-content">
                  <h4>Pricing</h4>
                  <p className="primary-text">Discuss for Details</p>
                  <p className="secondary-text">Custom quotes for every project</p>
                </div>
              </div>
            </div>
            
            <div className="social-follow">
              <div className="social-label">Follow My Work</div>
              <div className="social-pills">
                <a href="https://github.com/raunitx-02" target="_blank" rel="noreferrer" className="social-pill hover-target">
                  <FaGithub size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/raunit1" target="_blank" rel="noreferrer" className="social-pill hover-target">
                  <FaLinkedin size={16} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/_raunitx.19/" target="_blank" rel="noreferrer" className="social-pill hover-target">
                  <FaInstagram size={16} /> Instagram
                </a>
              </div>
            </div>
            
            <div className="availability-badge-container">
              <div className="availability-badge">
                <span className="pulse-dot green"></span>
                <span>Currently available for new projects — April 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
