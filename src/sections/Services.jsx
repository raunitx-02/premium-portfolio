import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, ShoppingCart, Smartphone, LineChart, PenTool, Share2 } from 'lucide-react';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Services.css';

import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceCard = ({ id, title, icon, shortDescription, slug, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="service-card hover-target"
    >
      <div className="service-card-inner">
        <div className="service-icon-container">
          {icon}
        </div>
        <div className="service-id">{id}</div>
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{shortDescription}</p>
        <Link to={`/service/${slug}`} className="service-explore" style={{display: 'block', textDecoration: 'none'}}>
          Explore →
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="What I Do" 
          subtitle="End-to-end digital solutions that deliver real, measurable business results." 
        />
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
