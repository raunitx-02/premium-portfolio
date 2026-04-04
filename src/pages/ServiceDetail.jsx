import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useModal } from '../context/ModalContext';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when mounting detail page
  }, [slug]);

  if (!service) {
    return (
      <div className="service-not-found container">
        <h2>Service Not Found</h2>
        <Link to="/" className="btn-primary hover-target">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page pt-32 pb-24">
      <div className="container">
        <Link to="/#services" className="back-link hover-target">
          <ChevronLeft size={20} /> Back to Services
        </Link>
        
        <div className="service-header">
          <motion.div 
            className="service-icon-large"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            {React.cloneElement(service.icon, { size: 48, color: "var(--color-accent-1)" })}
          </motion.div>
          <AnimatedSectionHeading 
            title={service.title} 
            subtitle={service.shortDescription} 
          />
        </div>

        <div className="service-content-grid">
          <div className="service-main-content">
            <h3 className="section-label">Overview</h3>
            <p className="full-description">{service.fullDescription}</p>
            
            <h3 className="section-label mt-12">My Process</h3>
            <div className="process-timeline">
              {service.process.map((step, idx) => (
                <div key={idx} className="process-step glass-card">
                  <div className="step-number">0{idx + 1}</div>
                  <div className="step-info">
                    <h4>{step.step}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-sidebar">
            <div className="glass-panel sidebar-box">
              <h3>Tech Stack</h3>
              <div className="tech-pills">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="glass-panel sidebar-box mt-8">
              <h3>Key Deliverables</h3>
              <ul className="deliverables-list">
                {service.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <span className="tick">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel sidebar-box mt-8 cta-box">
              <h3>Ready to start?</h3>
              <p>Let's build something amazing together.</p>
              <button onClick={openModal} className="btn-primary full-width hover-target" style={{border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '15px'}}>Start a Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
