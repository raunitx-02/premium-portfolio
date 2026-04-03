import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    color: "blue", // #2563EB
    quote: "Working with Raunit was a game changer for our sports content platform. His WordPress and SEO skills brought us over 500,000 monthly visitors within six months. He's proactive, reliable, and genuinely invested in his clients' success. Highly recommended for anyone seeking breakthrough results!",
    client: "Apurva Shah",
    role: "Co-founder, IPLPRO",
    initials: "AS"
  },
  {
    id: 2,
    color: "violet", // #7C3AED
    quote: "Raunit delivered a stunning digital agency site that exceeded our expectations. From branding to UI/UX and complex integrations, every detail was handled professionally and promptly. Our online leads increased by 200% after launch!",
    client: "Bhavil Jain",
    role: "Director, Artisanal Byte",
    initials: "BJ"
  },
  {
    id: 3,
    color: "orange", // #F97316
    quote: "Raunit crafted a sleek and powerful website for our IT firm, complete with a booking system and custom forms. Communication was smooth and he provided ongoing support to keep our site running at top speed. We couldn't be happier with the results!",
    client: "Jigar Mansuri",
    role: "CEO, Jigtech",
    initials: "JM"
  },
  {
    id: 4,
    color: "green", // #10B981
    quote: "Raunit built an engaging, interactive site for our art classes. The booking management and gallery features make a real difference for our students. His technical knowledge and design sense are exceptional — enrollment went up 80% in just two months!",
    client: "Hema Mohan",
    role: "Founder, Hema Chitraleela",
    initials: "HM"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsToShow = windowWidth > 992 ? 2 : 1;
  const maxIndex = Math.max(0, testimonialsData.length - cardsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="What Clients Say" 
          subtitle="Real feedback from real businesses I've worked with." 
        />
        
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-track-wrapper">
            <motion.div 
              className="carousel-track"
              animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}%)` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              style={{ width: `${(testimonialsData.length / cardsToShow) * 100}%` }}
            >
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="carousel-slide" 
                  style={{ width: `${100 / testimonialsData.length}%` }}
                >
                  <div className={`testimonial-card border-${testimonial.color} hover-target`}>
                    <div className="quote-mark">"</div>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p className="quote-text">"{testimonial.quote}"</p>
                    
                    <div className="client-info">
                      <div className="client-avatar">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="client-name">{testimonial.client}</h4>
                        <p className="client-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-arrow hover-target" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button 
                  key={i}
                  className={`carousel-dot hover-target ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            <button className="carousel-arrow hover-target" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
