import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Rocket } from 'lucide-react';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './About.css';

const TypewriterCode = () => {
  const code = 'const dev = {\n  name: "Raunit",\n  skills: ["React","Flutter","SEO"]\n};';
  const [text, setText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <pre className="code-snippet">
      <code>{text}<span className="cursor">|</span></code>
    </pre>
  );
};

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="tilt-card-wrapper"
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="About Me" 
          subtitle="Passionate Developer. Startup Founder. Hackathon Competitor." 
        />

        <div className="about-content">
          <div className="about-left">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="about-h3">Who Am I?</h3>
              <p className="about-p">
                I'm Raunit Raj, a passionate Web & App Developer and SEO Specialist based in Noida, Uttar Pradesh, India — currently pursuing B.Tech in Computer Science with AI/ML specialization at PW-Institute of Innovation × Medhavi Skills University (Batch 2025–2029).
              </p>
              <p className="about-p">
                Since September 2022, I've been freelancing and delivering measurable results for 35+ businesses — from sports news platforms hitting 500,000 monthly organic visitors, to art education platforms that doubled class enrollments, to IT firms seeing 150% more appointment bookings in a single quarter.
              </p>
              <p className="about-p">
                I'm the Founder of Hackly — an all-in-one SaaS platform for Indian institutions to run structured professional campus hackathons with AI problem generation, 5-minute event setup, team formation, anonymous judging, auto certificates, NAAC-ready reports, live leaderboards, and sponsor management. I also built HackMap India — a live React 18 + Firebase platform listing 500+ hackathons across India with an interactive Leaflet.js map, team finder, Cashfree payments, and Telegram alerts.
              </p>
              <p className="about-p">
                I compete in hackathons — Top Finalist at TCU Verse BuildStation (Galgotias University), completed InnovateNSUT'26 at NSUT, and at RIFT 2026 led Team Byte-Force to build an Autonomous CI/CD Healing Agent using LangGraph, FastAPI, Python, and React.
              </p>
              <p className="about-p">
                Simultaneously interning as Data Science + AI Intern at Labmentix (Python, ML, TensorFlow/PyTorch), Web Dev Intern at Yung Minds, and Web Dev Intern at DigiFalx — while building startups and completing my degree.
              </p>

              <div className="info-chips">
                <div className="info-chip hover-target">
                  <MapPin size={16} className="chip-icon" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="info-chip hover-target">
                  <GraduationCap size={16} className="chip-icon" />
                  <span>B.Tech CSE + AI/ML 2025–2029</span>
                </div>
                <div className="info-chip hover-target">
                  <Briefcase size={16} className="chip-icon" />
                  <span>3+ Years Freelancing · Sep 2022</span>
                </div>
                <div className="info-chip hover-target">
                  <Rocket size={16} className="chip-icon" />
                  <span>Founder — Hackly</span>
                </div>
              </div>

              <div className="contact-details-row">
                <a href="mailto:contact@raunitx.online" className="contact-detail-link hover-target">
                  <Mail size={16} />
                  <span>contact@raunitx.online</span>
                </a>
                <a href="tel:+917292858748" className="contact-detail-link hover-target">
                  <Phone size={16} />
                  <span>+91 72928 58748</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="about-right">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TiltCard>
                <div className="photo-container hover-target" data-cursor-text="View">
                  {/* Decorative Elements */}
                  <div className="decorative-outline"></div>
                  
                  {/* Main Photo */}
                  <div className="photo-inner">
                    <img src="/profile-photo.jpg" alt="Raunit Raj" className="about-photo" />
                  </div>

                  {/* Floating Elements with parallax on tilt */}
                  <motion.div 
                    className="floating-achievement"
                    style={{ translateZ: 50 }}
                  >
                    🏆 Top Finalist · TCU BuildStation
                  </motion.div>
                  
                  <motion.div 
                    className="floating-code"
                    style={{ translateZ: 80 }}
                  >
                    <TypewriterCode />
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
