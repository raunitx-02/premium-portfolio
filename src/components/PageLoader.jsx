import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageLoader.css';

const PageLoader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200); // Wait for the split animation to finish
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="page-loader">
          <motion.div
            className="loader-half top"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="loader-half bottom"
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Optional: Add a simple loading indicator in the center that fades out first */}
          <motion.div 
            className="loader-text"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Raunit.
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
