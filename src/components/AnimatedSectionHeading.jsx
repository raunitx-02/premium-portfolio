import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedSectionHeading.css';

const AnimatedSectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading-container">
      <motion.h2 
        className="section-title"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="section-underline"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
      {subtitle && (
        <motion.p 
          className="section-subtitle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedSectionHeading;
