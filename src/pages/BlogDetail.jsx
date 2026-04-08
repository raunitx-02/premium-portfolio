import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogsData } from '../data/blogsData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Post not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-header">
        <div className="container">
          <Link to="/" className="back-link">← Back to Insights</Link>
          
          <motion.div 
            className="blog-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="blog-badge">{post.category}</div>
            <h1 className="blog-detail-title">{post.title}</h1>
            <p className="blog-detail-subtitle">{post.subtitle}</p>
            
            <div className="blog-meta">
              <span className="meta-item"><span className="emoji">{post.emoji}</span> Case Study</span>
              <span className="meta-item">{post.date}</span>
              <span className="meta-item">{post.readingTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="blog-body">
        <div className="container">
          <motion.div 
            className="blog-content-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {post.content}
          </motion.div>

          <footer className="blog-post-footer">
            <div className="divider"></div>
            <h3>Interested in working together?</h3>
            <p>If you're looking for someone to help you scale your technical projects or SEO strategy, let's talk.</p>
            <Link to="/" className="cta-button">Get in Touch</Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
