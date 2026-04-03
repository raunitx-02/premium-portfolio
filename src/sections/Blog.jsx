import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Blog.css';

const blogData = [
  {
    category: "SEO",
    emoji: "📈",
    title: "Cricket Blog Success: Proven Guide to 500K+ Monthly Visitors",
    date: "October 26, 2025",
    excerpt: "A full case study on how I built IPLPRO.IN from zero to 500,000+ monthly organic visitors in just 6 months — covering platform choice, speed optimization, content strategy, technical SEO, schema markup, backlink building, and monetization.",
    link: "/cricket-blog-500k-visitors-monthly/"
  },
  {
    category: "Development",
    emoji: "🚀",
    title: "How I Built HackMap India in 7 Days — React + Firebase",
    date: "April 2026",
    excerpt: "A behind-the-scenes look at building India's #1 hackathon discovery platform — from ideation to production deployment on Vercel in under 7 days using React 18, Firebase, Leaflet.js, and Cashfree payments.",
    link: "#"
  },
  {
    category: "AI & Automation",
    emoji: "🤖",
    title: "Building an Autonomous CI/CD Agent with LangGraph & FastAPI",
    date: "February 2026",
    excerpt: "How Team Byte-Force built a multi-agent system that auto-detects bugs, generates AI-powered fixes, and monitors GitHub Actions CI/CD pipelines until all tests pass — built for RIFT 2026 Hackathon.",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="insights" className="blog-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Latest Insights" 
          subtitle="Thoughts, case studies, and lessons from real projects." 
        />
        
        <div className="blog-grid">
          {blogData.map((post, index) => (
            <motion.div 
              key={index}
              className="blog-card hover-target"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="blog-image-area">
                <span className="blog-emoji">{post.emoji}</span>
              </div>
              
              <div className="blog-content">
                <div className="blog-category">{post.category}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-more">Read More →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
