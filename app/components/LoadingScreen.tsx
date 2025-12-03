'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  const getLoadingMessage = () => {
    if (progress < 10) return '> Initializing system.';
    if (progress < 20) return '> Initializing system..';
    if (progress < 30) return '> Initializing system...';
    if (progress < 40) return '> Loading neural networks.';
    if (progress < 50) return '> Loading neural networks..';
    if (progress < 60) return '> Loading neural networks...';
    if (progress < 70) return '> Compiling portfolio data.';
    if (progress < 80) return '> Compiling portfolio data..';
    if (progress < 90) return '> Compiling portfolio data...';
    return '> System ready!';
  };

  useEffect(() => {
    const duration = 3800;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 80;

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50 grid-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scan Line */}
      <motion.div
        className="fixed w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

      <div className="text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="80"
              stroke="rgba(0, 255, 255, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="80"
              stroke="#00ffff"
              strokeWidth="3"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress / 100)}
              className="transition-all duration-75 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-cyan-400">{Math.round(progress)}%</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-400 font-mono text-lg mb-2"
        >
          {getLoadingMessage()}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1"
          >
            _
          </motion.span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-cyan-600 font-mono text-sm"
        >
          LOADING SYSTEM v4.0
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;