import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Typewriter = ({ words, typingSpeed = 70, deletingSpeed = 35, pause = 2200 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(() => {}, pause / 4);
      } else {
        timer = setTimeout(() => setText((prev) => prev.slice(0, -1)), deletingSpeed);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else {
        timer = setTimeout(() => setText((prev) => currentWord.slice(0, prev.length + 1)), typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

const Counter = ({ from = 0, to, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime - delay * 1000;

      if (progress >= 0) {
        const percentage = Math.min(progress / (duration * 1000), 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - percentage, 4);
        
        let currentValue = Math.floor(from + (to - from) * ease);
        setCount(currentValue);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      } else {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, delay]);

  return <>{count}</>;
};

const Hero = () => {
  const name = "Raunit Raj";
  
  return (
    <section id="hero" className="hero-section">
      <div className="hero-gradient-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <motion.div 
              className="availability-pill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="pulse-dot"></span>
              <span className="pill-text">Available for Work · Open to Full-Time & Freelance</span>
            </motion.div>

            <motion.p 
              className="greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Hi there, I'm 👋
            </motion.p>

            <div className="name-container">
              <motion.h1 className="name" aria-label={name}>
                {name.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 40, rotate: 10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.05,
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div 
                className="name-underline"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <motion.div 
              className="roles-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <Typewriter words={[
                "Web & App Developer", 
                "SEO Specialist", 
                "Startup Founder", 
                "Flutter Developer", 
                "AI Tools Expert", 
                "React Developer", 
                "WordPress Expert"
              ]} />
            </motion.div>

            <motion.p 
              className="bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              I build high-performance websites, mobile apps, and digital experiences that drive real business results. Founder of Hackly. Trusted by 35+ businesses across India — delivering 500K+ monthly visitors, 200% lead increases, and measurable growth.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              <a href="/resume.pdf" className="btn-primary hover-target" target="_blank" rel="noreferrer">
                Download Resume 📄
              </a>
              <a href="#works" className="btn-secondary hover-target">
                View My Work →
              </a>
            </motion.div>

            <motion.div 
              className="social-icons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.7 }}
            >
              <a href="https://github.com/raunitx-02" target="_blank" rel="noreferrer" className="social-icon hover-target"><FaGithub size={20} /></a>
              <a href="https://linkedin.com/in/raunit1" target="_blank" rel="noreferrer" className="social-icon hover-target"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/_raunitx.19/" target="_blank" rel="noreferrer" className="social-icon hover-target"><FaInstagram size={20} /></a>
              <a href="mailto:contact@raunitx.online" className="social-icon hover-target"><Mail size={20} /></a>
            </motion.div>
          </div>

          <div className="hero-right">
            <motion.div 
              className="image-container"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <img src="/profile-photo.jpg" alt="Raunit Raj" className="profile-img hover-target" data-cursor-text="View" />
              
              <motion.div 
                className="floating-card top-right"
                animate={{ y: [-8, 8] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
              >
                <div className="hero-notification hover-target">
                  <span className="pulse-dot"></span>
                  🚀 Founder of Hackly
                </div>
              </motion.div>

              <motion.div 
                className="floating-card bottom-left"
                animate={{ y: [-8, 8] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut", delay: 1 }}
              >
                <span className="highlight-text">📈 500K+ Monthly Visitors</span>
              </motion.div>

              <div className="vertical-text">DEVELOPER · FOUNDER · CREATOR</div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="stats-row"
          initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="stat-block">
            <div className="stat-number"><Counter to={3} delay={0.2} />+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-block">
            <div className="stat-number"><Counter to={35} delay={0.4} />+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-block">
            <div className="stat-number"><Counter to={500} delay={0.6} />K+</div>
            <div className="stat-label">Monthly Visitors Delivered</div>
          </div>
          <div className="stat-block">
            <div className="stat-number"><Counter to={100} delay={0.8} />%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
