import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Hackathons.css';

const hackathonsData = [
  {
    id: "01",
    color: "gold", // #F59E0B
    icon: "🥇",
    title: "Top Finalist — TCU Verse BuildStation Hackathon",
    organizer: "Galgotias University × Innovxus × Builder Base",
    description: "Competed among talented college developers from across India and was recognized as a Top Finalist for building innovative tech solutions under intense hackathon pressure. Demonstrated strong problem-solving, rapid prototyping, full-stack development, and teamwork skills in a competitive environment.",
    certificate: "✓ Certificate Issued — Technical Community Universe"
  },
  {
    id: "02",
    color: "blue", // #2563EB
    icon: "🚀",
    title: "InnovateNSUT'26 — 24-Hour Hackathon",
    organizer: "DevComm · Avinya'26 · Netaji Subhas University of Technology, Delhi",
    description: "Completed a full 24-hour hackathon from ideation to working product under intense time pressure at one of India's top engineering universities. Demonstrated the ability to build, iterate, debug, and present a polished product in under 24 hours — the true test of a developer.",
    certificate: "✓ Certificate Issued — TruScholar"
  },
  {
    id: "03",
    color: "violet", // #7C3AED
    icon: "🤖",
    title: "RIFT 2026 — Autonomous CI/CD Healing Agent",
    organizer: "AIML DevOps Automation · Agentic Systems Track · RIFT 2026",
    description: "Led Team Byte-Force (4 members) to build a fully autonomous multi-agent CI/CD healing system. The agent clones any GitHub repo, detects all bug types (LINTING, SYNTAX, LOGIC, TYPE_ERROR, IMPORT, INDENTATION), generates AI-powered fixes using LangGraph + GPT/Gemini, commits with [AI-AGENT] prefix, and monitors GitHub Actions CI/CD until all tests pass — visualized live in a React dashboard with real-time timeline, fixes table, score charts.",
    certificate: "Team: Byte-Force · Leader: Raunit Raj"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="hackathons-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Hackathons & Achievements" 
          subtitle="Competing, building, and winning under pressure." 
        />
        
        <div className="hackathon-cards">
          {hackathonsData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`hackathon-card border-${item.color} hover-target`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="hackathon-number">{item.id}</div>
              <div className="hackathon-icon">{item.icon}</div>
              
              <h3 className="hackathon-title">{item.title}</h3>
              <p className="hackathon-org">{item.organizer}</p>
              
              <p className="hackathon-desc">{item.description}</p>
              
              <div className="hackathon-cert">
                <span className="cert-chip">{item.certificate}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
