import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import ContactForm from './ContactForm';
import './ContactModal.css';

const ContactModal = () => {
  const { isContactModalOpen, closeModal } = useModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div 
            className="modal-content contact-form-card"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn hover-target" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            <h3 className="form-title">Start a Project</h3>
            <ContactForm onClose={closeModal} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
