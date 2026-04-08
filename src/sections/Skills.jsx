import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiFirebase, SiTailwindcss, SiPython, SiFastapi, 
  SiDocker, SiGithubactions, SiVercel, SiFlutter, 
  SiWordpress, SiWoocommerce, SiShopify, SiLaravel, 
  SiVuedotjs, SiN8N, SiMysql, SiPhp, SiFramer, 
  SiFigma, SiHtml5, SiCss, SiJavascript, 
  SiGit, SiGithub, SiTensorflow, SiPytorch, SiPandas, SiNumpy,
  SiNextdotjs, SiNodedotjs, SiTypescript, SiPostgresql, SiMongodb,
  SiRedis, SiGooglecloud, SiKubernetes, SiGraphql, SiRedux,
  SiSvelte, SiBun, SiDeno, SiGo, SiRust,
  SiSwift, SiKotlin, SiPrisma, SiSupabase, SiCloudflare,
  SiPostman, SiOpenai, SiLinux
} from "react-icons/si";
import AnimatedSectionHeading from '../components/AnimatedSectionHeading';
import './Skills.css';

const skillsData = [
  { name: 'WordPress', percent: 99 },
  { name: 'AI Tools & Automation', percent: 95 },
  { name: 'PHP', percent: 92 },
  { name: 'Shopify', percent: 90 },
  { name: 'SEO Optimization', percent: 90 },
  { name: 'n8n Workflow Automation', percent: 90 },
  { name: 'Flutter (Dart)', percent: 88 },
  { name: 'Android Development', percent: 85 },
  { name: 'iOS Development', percent: 82 },
  { name: 'MySQL / Database', percent: 80 },
  { name: 'Laravel (PHP Framework)', percent: 78 },
  { name: 'React JS', percent: 75 },
  { name: 'Social Media Marketing', percent: 74 }
];

const techStackItems = [
  { name: "React", icon: <SiReact size={26} color="#61DAFB" /> },
  { name: "Firebase", icon: <SiFirebase size={26} color="#FFCA28" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={26} color="#38B2AC" /> },
  { name: "Python", icon: <SiPython size={26} color="#3776AB" /> },
  { name: "FastAPI", icon: <SiFastapi size={26} color="#009688" /> },
  { name: "Docker", icon: <SiDocker size={26} color="#2496ED" /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={26} color="#2088FF" /> },
  { name: "Vercel", icon: <SiVercel size={26} color="#000000" /> },
  { name: "Flutter", icon: <SiFlutter size={26} color="#02569B" /> },
  { name: "WordPress", icon: <SiWordpress size={26} color="#21759B" /> },
  { name: "WooCommerce", icon: <SiWoocommerce size={26} color="#96588A" /> },
  { name: "Shopify", icon: <SiShopify size={26} color="#7AB55C" /> },
  { name: "Laravel", icon: <SiLaravel size={26} color="#FF2D20" /> },
  { name: "Vue.js", icon: <SiVuedotjs size={26} color="#4FC08D" /> },
  { name: "n8n", icon: <SiN8N size={26} color="#FF6D5A" /> },
  { name: "MySQL", icon: <SiMysql size={26} color="#4479A1" /> },
  { name: "PHP", icon: <SiPhp size={26} color="#777BB4" /> },
  { name: "Framer Motion", icon: <SiFramer size={26} color="#0055FF" /> },
  { name: "Figma", icon: <SiFigma size={26} color="#F24E1E" /> },
  { name: "HTML5", icon: <SiHtml5 size={26} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss size={26} color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript size={26} color="#F7DF1E" /> },
  { name: "Git", icon: <SiGit size={26} color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub size={26} color="#181717" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={26} color="#FF6F00" /> },
  { name: "PyTorch", icon: <SiPytorch size={26} color="#EE4C2C" /> },
  { name: "pandas", icon: <SiPandas size={26} color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy size={26} color="#013243" /> },
  { name: "Next.js", icon: <SiNextdotjs size={26} color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs size={26} color="#339933" /> },
  { name: "TypeScript", icon: <SiTypescript size={26} color="#3178C6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={26} color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb size={26} color="#47A248" /> },
  { name: "Redis", icon: <SiRedis size={26} color="#DC382D" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={26} color="#4285F4" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={26} color="#326CE5" /> },
  { name: "GraphQL", icon: <SiGraphql size={26} color="#E10098" /> },
  { name: "Redux", icon: <SiRedux size={26} color="#764ABC" /> },
  { name: "Svelte", icon: <SiSvelte size={26} color="#FF3E00" /> },
  { name: "Bun", icon: <SiBun size={26} color="#000000" /> },
  { name: "Deno", icon: <SiDeno size={26} color="#000000" /> },
  { name: "Go", icon: <SiGo size={26} color="#00ADD8" /> },
  { name: "Rust", icon: <SiRust size={26} color="#000000" /> },
  { name: "Swift", icon: <SiSwift size={26} color="#F05138" /> },
  { name: "Kotlin", icon: <SiKotlin size={26} color="#7F52FF" /> },
  { name: "Prisma", icon: <SiPrisma size={26} color="#2D3748" /> },
  { name: "Supabase", icon: <SiSupabase size={26} color="#3ECF8E" /> },
  { name: "Cloudflare", icon: <SiCloudflare size={26} color="#F38020" /> },
  { name: "Postman", icon: <SiPostman size={26} color="#FF6C37" /> },
  { name: "OpenAI", icon: <SiOpenai size={26} color="#412991" /> },
  { name: "Linux", icon: <SiLinux size={26} color="#FCC624" /> },
];

const TechBadge = ({ tech, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      className="tech-badge-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ position: 'relative' }}
    >
      <motion.div 
        className="tech-badge"
        whileHover={{ scale: 1.15, y: -16 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ 
          y: {
            duration: 3 + (index % 5) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (index % 5) * 0.3
          },
          scale: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        {tech.icon}
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="liquid-tooltip"
            initial={{ opacity: 0, scale: 0.5, y: 10, x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: -10, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.8, y: 5, x: '-50%' }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 25,
              mass: 0.8
            }}
          >
            <div className="tooltip-content">
              {tech.name}
              <div className="tooltip-arrow" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillBar = ({ name, percent, delay }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-track">
        <motion.div 
          className="skill-fill"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 1, 0.5, 1],
            delay 
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <AnimatedSectionHeading 
          title="Skills & Tech Stack" 
          subtitle="Technologies I work with every single day." 
        />
        
        <div className="skills-content">
          <div className="skills-left">
            <motion.h3 
              className="skills-h3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Proficiency
            </motion.h3>
            
            <div className="skill-bars-list">
              {skillsData.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percent={skill.percent} 
                  delay={0.1 + index * 0.08}
                />
              ))}
            </div>
          </div>
          
          <div className="skills-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="skills-h3">Tech Stack</h3>
              <p className="skills-p">Tools, frameworks & platforms</p>
            </motion.div>
            
            <div className="tech-badge-grid">
              {techStackItems.map((tech, index) => (
                <TechBadge key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
