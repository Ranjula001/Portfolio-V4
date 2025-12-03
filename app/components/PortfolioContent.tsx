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