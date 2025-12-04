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
    const increment = 150 / (duration / interval);

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
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Corner Borders */}
      <div className="absolute top-4 left-4 w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="absolute top-4 right-4 w-16 h-16">
        <div className="absolute top-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="absolute bottom-4 left-4 w-16 h-16">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-mono text-cyan-400 tracking-[0.3em] mb-2">
          R . I L U K P I T I Y A
        </h1>
        <p className="text-cyan-600 font-mono text-sm tracking-wider">
          SYSTEM verson 4.4.4.4
        </p>
      </motion.div>

      {/* Progress Circle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative w-32 h-32 mb-8"
      >
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="60"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="60"
            stroke="#00ffff"
            strokeWidth="2"
            fill="none"
            strokeDasharray={377}
            strokeDashoffset={377 * (1 - progress / 100)}
            className="transition-all duration-100 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-mono text-cyan-400">{Math.round(progress)}%</span>
        </div>
      </motion.div>
      
      {/* Loading Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-cyan-400 font-mono text-sm flex items-center"
      >
        {getLoadingMessage()}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 w-2 h-4 bg-cyan-400"
        ></motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;