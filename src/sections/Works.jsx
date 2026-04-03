import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Works.css';

const projectsData = [
  {
    id: 1,
    badge: "🚀 Startup",
    badgeColor: "blue",
    name: "Hackly",
    tags: ["React", "Firebase", "JavaScript", "Firestore"],
    description: "All-in-one campus hackathon SaaS for Indian institutions. AI problem generator, 5-min setup, anonymous judging...",
    metric: "🔥 Onboarding Pilot Institutions",
    live: "https://hackly.online",
    github: "https://github.com/raunitx-02/hackly",
    category: "Startup"
  },
  {
    id: 2,
    badge: "🤖 Hackathon & AI",
    badgeColor: "violet",
    name: "HackMap India",
    tags: ["React 18", "Firebase", "Tailwind", "Leaflet.js", "Cashfree"],
    description: "India's #1 Hackathon Discovery & Team-Building Platform. Browse 500+ hackathons with interactive India map...",
    metric: "🔥 Live on Production · 500+ Hackathons Listed",
    live: "https://hackmap-india.vercel.app",
    github: "https://github.com/raunitx-02/hackmap-india",
    category: "Hackathon & AI"
  },
  {
    id: 3,
    badge: "🤖 Hackathon",
    badgeColor: "violet",
    name: "Autonomous CI/CD Healing Agent",
    tags: ["Python", "FastAPI", "LangGraph", "React", "Docker"],
    description: "RIFT 2026 — AIML DevOps Automation Track. Multi-agent system that auto-detects bugs, generates AI fixes...",
    metric: "🔥 RIFT 2026 · Team Byte-Force Leader",
    live: null,
    github: "https://github.com/raunitx-02/buggy-test-repo",
    category: "Hackathon & AI"
  },
  {
    id: 4,
    badge: "🧠 AI / ML",
    badgeColor: "violet",
    name: "Python Code Debugger — OpenEnv",
    tags: ["Python", "FastAPI", "Docker", "OpenEnv", "MIT License"],
    description: "AI agent training environment with 9 tasks across 3 difficulty tiers. Trains agents on real Python debugging...",
    metric: "🔥 9 Tasks · Deterministic Grading",
    live: null,
    github: "https://github.com/raunitx-02/code-debugger-env",
    category: "Hackathon & AI"
  },
  {
    id: 5,
    badge: "💼 Client Work",
    badgeColor: "slate",
    name: "IPLPRO.in",
    tags: ["WordPress", "SEO", "CDN", "AMP", "Schema"],
    description: "IPL & cricket sports news platform built from zero to 500K+ monthly organic visitors in 6 months...",
    metric: "🔥 500,000+ Monthly Visitors",
    live: "https://iplpro.in",
    github: "https://github.com/raunitx-02/iplpro",
    category: "Client Work"
  },
  {
    id: 6,
    badge: "💼 Client Work",
    badgeColor: "slate",
    name: "ArtisanalByte",
    tags: ["Laravel", "Vue.js", "Tailwind CSS", "WordPress"],
    description: "Visually rich digital agency portfolio with animated homepage, modular portfolio grids, testimonial carousel...",
    metric: "🔥 200% Increase in Online Inquiries",
    live: "https://artisanalbyte.com",
    github: "https://github.com/raunitx-02/artisanal-byte",
    category: "Client Work"
  },
  {
    id: 7,
    badge: "💼 Client Work",
    badgeColor: "slate",
    name: "Jigtech",
    tags: ["WordPress", "PHP", "Google Maps API", "SSL"],
    description: "IT solutions corporate site with dynamic booking system, tiered service pages, live chat, Case studies...",
    metric: "🔥 150% Increase in Appointments",
    live: "https://jigtech.me",
    github: "https://github.com/raunitx-02/jigtech-website",
    category: "Client Work"
  }
];

const categories = ["All", "Startup", "Hackathon & AI", "Client Work"];

const Works = () => {
  const [activeTab, setActiveTab] = useState("All");
  const targetRef = useRef(null);
  
  // Create a fast-updating state to force re-evaluation of scroll bounds
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useLayoutEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Filter projects
  const filteredProjects = projectsData.filter(project => 
    activeTab === "All" ? true : project.category === activeTab
  );

  // Responsive scroll transform
  // Calculate approximate width needed based on number of cards. Card is 380px + 24px gap.
  const isDesktop = windowWidth > 768;
  const cardsWidth = filteredProjects.length * 404;
  const viewportWidth = windowWidth;
  // Make sure we never scroll positively
  const scrollEnd = isDesktop ? -Math.max(0, cardsWidth - viewportWidth + 100) : 0;
  
  const x = useTransform(smoothProgress, [0, 1], ["0px", `${scrollEnd}px`]);

  return (
    <section id="works" className="works-section" ref={targetRef} style={{ height: isDesktop ? '300vh' : 'auto' }}>
      <div className={`works-sticky-container ${!isDesktop ? 'static-mobile' : ''}`}>
        
        {/* Progress bar at top of section */}
        {isDesktop && (
          <motion.div className="works-progress-bar" style={{ scaleX: smoothProgress }} />
        )}

        <div className="container works-header-container">
          <AnimatedSectionHeading 
            title="Featured Works" 
            subtitle="Real projects. Real results. Real impact." 
          />

          {/* Filter Tabs */}
          <div className="works-filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-tab ${activeTab === cat ? 'active' : ''} hover-target`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="works-cards-wrapper">
          <motion.div 
            className="works-cards-container"
            style={{ x: isDesktop ? x : 0 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="project-card hover-target"
                >
                  <div className={`project-badge ${project.badgeColor}`}>
                    {project.badge}
                  </div>
                  
                  <h3 className="project-name">{project.name}</h3>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-metric">
                    {project.metric}
                  </div>
                  
                  <div className="project-buttons">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="btn-project live">
                        Live Site ↗
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-project github">
                      GitHub →
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Works;
