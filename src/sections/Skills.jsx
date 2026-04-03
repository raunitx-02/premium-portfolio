import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Skills.css';

const skillsData = [
  { name: 'WordPress', percent: 99 },
  { name: 'AI Tools & Automation', percent: 95 },
  { name: 'PHP', percent: 92 },
  { name: 'Shopify', percent: 90 },
  { name: 'SEO Optimization', percent: 90 },
  { name: 'n8n Workflow Automation', percent: 90 },
  { name: 'Flutter (Dart)', percent: 88 },
  { name: 'Android Development', percent: 85 },
  { name: 'iOS Development', percent: 82 },
  { name: 'MySQL / Database', percent: 80 },
  { name: 'Laravel (PHP Framework)', percent: 78 },
  { name: 'React JS', percent: 75 },
  { name: 'Social Media Marketing', percent: 74 }
];

const techStack = [
  "React 18", "Firebase", "Tailwind CSS", "Python", "FastAPI", "LangGraph", 
  "Docker", "GitHub Actions", "Vercel", "Railway", "Flutter", "WordPress", 
  "WooCommerce", "Shopify", "Magento", "Laravel", "Vue.js", "n8n", "MySQL", 
  "PHP", "Framer Motion", "Leaflet.js", "Zustand", "React Router v6", "Figma", 
  "HTML5", "CSS3", "JavaScript ES6+", "Git & GitHub", "Google Analytics", 
  "Rank Math SEO", "WP Rocket", "Cashfree", "Telegram Bot API", "Recharts", 
  "Axios", "Mailchimp", "TensorFlow", "PyTorch", "pandas", "NumPy", "scikit-learn"
];

const SkillBar = ({ name, percent, delay }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-track">
        <motion.div 
          className="skill-fill"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 1, 0.5, 1],
            delay 
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Skills & Tech Stack" 
          subtitle="Technologies I work with every single day." 
        />
        
        <div className="skills-content">
          <div className="skills-left">
            <motion.h3 
              className="skills-h3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Proficiency
            </motion.h3>
            
            <div className="skill-bars-list">
              {skillsData.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percent={skill.percent} 
                  delay={0.1 + index * 0.08}
                />
              ))}
            </div>
          </div>
          
          <div className="skills-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="skills-h3">Tech Stack</h3>
              <p className="skills-p">Tools, frameworks & platforms</p>
            </motion.div>
            
            <div className="tech-badge-grid">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={tech} 
                  className="tech-badge hover-target"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 + (index % 10) * 0.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
