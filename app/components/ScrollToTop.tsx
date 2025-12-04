'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector('.absolute.inset-0.overflow-y-auto');
    
    const toggleVisibility = () => {
      if (scrollContainer) {
        setIsVisible(scrollContainer.scrollTop > 300);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', toggleVisibility);
      return () => scrollContainer.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.absolute.inset-0.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-20 right-20 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-2xl border-2 border-cyan-400 hover:shadow-cyan-400/50 group"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/jetPack.png"
              alt="Jetpack"
              fill
              className="object-contain group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-pulse"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}