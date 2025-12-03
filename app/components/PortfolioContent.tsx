'use client';

import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import GitHubStats from './GitHubStats';
import Contact from './Contact';

const PortfolioContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-1"
    >
      {/* Corner Borders */}
      <div className="fixed top-4 left-4 w-16 h-16 z-70">
        <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed top-4 right-4 w-16 h-16 z-70">
        <div className="absolute top-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-4 left-4 w-16 h-16 z-70">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-4 right-4 w-16 h-16 z-70">
        <div className="absolute bottom-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>
      
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubStats />
      <Contact />
    </motion.div>
  );
};

export default PortfolioContent;