import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Certifications.css';

const certificationsData = [
  { name: "Frontend Developer (React)", issuer: "HackerRank", initials: "HR" },
  { name: "Software Engineer", issuer: "HackerRank", initials: "HR" },
  { name: "Software Engineer Intern", issuer: "HackerRank", initials: "HR" },
  { name: "Node.js (Intermediate)", issuer: "HackerRank", initials: "HR" },
  { name: "Rest API (Intermediate)", issuer: "HackerRank", initials: "HR" },
  { name: "Angular (Intermediate)", issuer: "HackerRank", initials: "HR" },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", initials: "HR" },
  { name: "SQL (Advanced)", issuer: "HackerRank", initials: "HR" },
  { name: "SQL (Intermediate)", issuer: "HackerRank", initials: "HR" },
  { name: "JavaScript (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "Python (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "Java (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "Angular (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "SQL (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "R (Basic)", issuer: "HackerRank", initials: "HR" },
  { name: "AI Agent Builder Workshop", issuer: "BOT Campus AI", initials: "BC" },
  { name: "AI Tools Workshop", issuer: "Be10x", initials: "B1" },
  { name: "Automate Everything with n8n", issuer: "LetsUpgrade", initials: "LU" },
  { name: "InnovateNSUT'26 Certificate", issuer: "TruScholar", initials: "TS" },
  { name: "TCU Verse BuildStation Certificate", issuer: "Technical Community Universe", initials: "TC" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Certifications" 
          subtitle="Verified skills and completed learning milestones." 
        />
        
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card hover-target"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <div className="cert-icon">
                {cert.initials}
              </div>
              <div className="cert-content">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-verified">✓ Verified</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
