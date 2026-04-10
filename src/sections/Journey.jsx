import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Journey.css';

const journeyData = {
  experience: [
    {
      id: "e1",
      company: "Hackly",
      role: "Founder & Product Developer",
      period: "2025 – Present",
      description: "Building Hackly — all-in-one SaaS OS for Indian institutions to run professional campus hackathons. AI Problem Generator (CBSE/ICSE/college syllabus-aware), 5-minute no-code setup, team formation & registration, anonymous judging dashboard, live leaderboard, auto-branded certificate generation in seconds, NAAC & NBA accreditation-ready reports, anti-ghosting reliability score, campus pulse analytics, sponsor management with impact reports, and done-for-you event services. Currently onboarding pilot institutions.",
      color: "blue"
    },
    {
      id: "e2",
      company: "HackMap India",
      role: "Creator & Full-Stack Developer",
      period: "2026 – Present",
      description: "Built India's #1 Hackathon Discovery & Team-Building Platform from scratch. React 18, Firebase Firestore, Firebase Auth (Google + GitHub OAuth), Tailwind CSS, Leaflet.js interactive India map, Cashfree Payment Gateway, Telegram Bot API, Zustand state management, Framer Motion animations, deployed on Vercel with 3 production deployments. 500+ hackathons listed. Live at hackmap-india.vercel.app.",
      color: "blue"
    },
    {
      id: "e3",
      company: "Yung Minds",
      role: "Web Development Intern",
      period: "December 2025 – Present · Remote",
      description: "Designing, developing, and maintaining responsive web pages for Yung Minds digital products. Working with HTML, CSS, JavaScript, and modern frontend frameworks. Collaborating with designers and senior developers to convert UI/UX designs into pixel-perfect interfaces. Responsible for debugging, performance improvements, clean maintainable code, feature documentation, and UI/UX improvement suggestions.",
      color: "blue"
    },
    {
      id: "e4",
      company: "Labmentix Technologies",
      role: "Data Science with AI Intern",
      period: "November 2025 – Present · Remote",
      description: "Developing and implementing machine learning models for predictive analytics. Working with Python, pandas, NumPy, scikit-learn, TensorFlow, and PyTorch. Analyzing large datasets to extract meaningful insights. Building AI-powered solutions and intelligent automation workflows. Building end-to-end data pipelines from collection to deployment. Model training, evaluation, optimization, and integrating AI/ML capabilities into web applications.",
      color: "blue"
    },
    {
      id: "e5",
      company: "DigiFalx Digital Beginning LLP",
      role: "Web Development Intern",
      period: "October 2025 – Present · Remote",
      description: "Design, optimization, and deployment of dynamic company websites using WordPress. Collaborating with senior developers on responsive layouts and site performance. Integrating SEO strategies improving Google PageSpeed scores. Enhancing site features, fixing UI/UX issues. Running client demos. Hands-on in technical execution and client relationship management.",
      color: "blue"
    },
    {
      id: "e6",
      company: "Self-Employed",
      role: "Freelance Web Developer & SEO Specialist",
      period: "September 2022 – Present · Noida, Uttar Pradesh",
      description: "Freelancing since 2022 — delivering end-to-end web development, mobile app development, and SEO for 35+ businesses. Specializing in WordPress, Shopify, Magento, Flutter (Dart), Laravel, and advanced SEO. Key results: 500K+ monthly visitors (IPLPRO.in), 200% lead increase (ArtisanalByte), 150% appointment growth (Jigtech), 80% enrollment boost (Hema Chitraleela), 2x qualified leads (TopKlickz), doubled visitor-to-lead rates (GrowSuperRich).",
      color: "blue"
    }
  ],
  education: [
    {
      id: "ed1",
      company: "PW-Institute of Innovation × Medhavi Skills University",
      role: "B.Tech — Computer Science Engineering with AI/ML",
      period: "2025 – 2029 · In Progress",
      description: "Pursuing B.Tech CSE with AI/ML specialization. Coursework includes C Programming, Data Structures, Computer Fundamentals, ROS, HTML/CSS/JS, Python, and AI/ML fundamentals. Actively balancing academics with 3 simultaneous internships, 2 startup products, and hackathon participation.",
      color: "orange"
    },
    {
      id: "ed2",
      company: "National Institute of Open Schooling (NIOS)",
      role: "Senior Secondary — Class XII",
      period: "Completed",
      description: "",
      color: "orange"
    },
    {
      id: "ed3",
      company: "Central Board of Secondary Education (CBSE)",
      role: "Secondary — Class X",
      period: "Completed",
      description: "",
      color: "orange"
    }
  ]
};

const TimelineNode = ({ data, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`timeline-row ${isEven ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-card hover-target">
        <div className={`role-badge ${data.color}`}>
          {data.color === 'blue' ? 'Work' : 'Education'}
        </div>
        <h3 className="timeline-company">{data.company}</h3>
        <h4 className="timeline-role">{data.role}</h4>
        <div className="timeline-period">{data.period}</div>
        {data.description && <p className="timeline-desc">{data.description}</p>}
      </div>
      
      <div className="timeline-nodepoint">
        <div className={`node-circle ${data.color}`}>
          <div className="node-pulse"></div>
        </div>
      </div>
      
      <div className="timeline-empty"></div>
    </motion.div>
  );
};

const Journey = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);
  
  // Custom scroll logic for the center line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const dataToRender = journeyData[activeTab];

  return (
    <section id="journey" className="journey-section" ref={sectionRef}>
      <div className="container">
        <AnimatedSectionHeading 
          title="My Journey" 
          subtitle="From freelancer to founder — here's my story so far." 
        />
        
        <div className="journey-tabs">
          <button 
            className={`journey-tab hover-target ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            💼 Experience
          </button>
          <button 
            className={`journey-tab hover-target ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            🎓 Education
          </button>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line-bg"></div>
          <motion.div 
            className="timeline-line-fill" 
            style={{ height: lineHeight }} 
          />
          
          <div className="timeline-entries">
            {dataToRender.map((item, index) => (
              <TimelineNode key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>
        
        <div className="timeline-download-btn">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-download-resume hover-target">
            Download Full Resume 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;
