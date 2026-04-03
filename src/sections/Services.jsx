import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, ShoppingCart, Smartphone, LineChart, PenTool, Share2 } from 'lucide-react';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Services.css';

const servicesData = [
  {
    id: "01",
    title: "WordPress Development",
    icon: <Layout size={28} color="#2563EB" />,
    description: "Custom theme & plugin development for blogs, portfolios, and complex multi-page company sites. All builds are fast, secure, SEO-optimized, WooCommerce-ready, and easy for your team to manage. Process: Consultation → Wireframe → Development → Content Integration → Testing → Launch → Ongoing Support. 25+ WordPress projects delivered across India."
  },
  {
    id: "02",
    title: "E-Commerce Development",
    icon: <ShoppingCart size={28} color="#2563EB" />,
    description: "High-converting Shopify, WooCommerce & Magento stores built for real sales from day one. Full setup: payment gateways (Razorpay, Stripe, PayPal), inventory management, shipping, coupons, analytics dashboards, customer reviews, and fully mobile-optimized checkout. Helped multiple brands launch and scale their online revenue significantly."
  },
  {
    id: "03",
    title: "Mobile App Development",
    icon: <Smartphone size={28} color="#2563EB" />,
    description: "Cross-platform Android & iOS apps built with Flutter (Dart). Single codebase, blazing fast UI, secure Firebase authentication, REST API integration, push notifications, in-app purchases, and full Google Play Store & Apple App Store submission support with documentation."
  },
  {
    id: "04",
    title: "SEO Optimization",
    icon: <LineChart size={28} color="#2563EB" />,
    description: "Data-driven SEO for sustainable, long-term organic growth. Comprehensive technical audits, competitive keyword research, on-page & off-page optimization, content strategy, local SEO for Google Maps, schema markup, XML sitemaps, and transparent monthly reporting with real metrics. Proven: 500K+ monthly organic visitors delivered."
  },
  {
    id: "05",
    title: "Web Design & UI/UX",
    icon: <PenTool size={28} color="#2563EB" />,
    description: "Human-centric, conversion-optimized design from discovery to delivery. Process: Discovery Session → Wireframing → Full Visual Design → Style Guide → Interactive Prototyping → Dev Handoff → Post-Launch Review. Responsive across all devices, WCAG accessible, and uniquely branded for every client."
  },
  {
    id: "06",
    title: "Social Media Marketing",
    icon: <Share2 size={28} color="#2563EB" />,
    description: "Full-service social media management across Facebook, Instagram, LinkedIn, and Twitter. Content strategy, branded graphics, short-form video creation, paid ad campaigns, community management, influencer outreach, and monthly analytics reporting with transparent ROI. Turns followers into real customers."
  }
];

const ServiceCard = ({ id, title, icon, description, index }) => {
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
        <p className="service-desc">{description}</p>
        <div className="service-explore">
          Explore →
        </div>
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
