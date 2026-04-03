import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Works', href: '#works' },
  { name: 'Journey', href: '#journey' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle active section logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = '';
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
          }
        }
      });
      setActiveSection(`#${current}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Letters animation configuration
  const letterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <a href="#" className="nav-logo hover-target">
            Raunit<span className="dot">.</span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`nav-link hover-target ${isActive ? 'active' : ''}`}
                >
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: { transition: { staggerChildren: 0.05, delayChildren: 1.2 + (i * 0.1) } }
                    }}
                  >
                    {link.name.split('').map((char, index) => (
                      <motion.span 
                        key={index} 
                        variants={letterVariants} 
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <span className="nav-link-underline" />
                </a>
              );
            })}
          </div>

          {/* Hire Me Button Desktop */}
          <a href="#contact" className="btn-hire-me hover-target">
            Hire Me 🚀
          </a>

          {/* Mobile Hamburger */}
          <button 
            className={`mobile-menu-btn hover-target ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
