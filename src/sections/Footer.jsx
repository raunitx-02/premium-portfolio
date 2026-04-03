import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Raunit<span className="dot">.</span>
          </div>
          
          <p className="footer-copyright">
            © {currentYear} Raunit Raj. All rights reserved.
          </p>
          
          <div className="footer-built">
            Built with <Heart size={14} className="heart-icon hover-target" /> and infinite coffee.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
