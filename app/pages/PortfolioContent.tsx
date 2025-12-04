'use client';

import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import GitHubStats from './GitHubStats';
import Contact from './Contact';
import ScrollToTop from '../components/ScrollToTop';

const PortfolioContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50"
    >
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubStats />
      <Contact />
      <ScrollToTop />
    </motion.div>
  );
};

export default PortfolioContent;