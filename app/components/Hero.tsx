'use client';

import { motion } from 'framer-motion';
import { User, Cpu } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="py-12 px-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-sm font-mono flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 animate-pulse" />
            {'>'} Initializing_user_profile...
          </motion.div>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Hi, I&apos;m <span className="jarvis-text">Ranjula Ilukpitiya</span>
            </h1>
            <div className="space-y-2 text-xl text-gray-300">
              <div>• Software Engineer</div>
              <div>• React Frontend Developer</div>
              <div>• ML & Fitness Tech Enthusiast</div>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            I am an undergraduate at SLIIT and a passionate developer who enjoys 
            building modern web applications. I love to learn new technologies and 
            create innovative solutions that make a difference.
          </p>
          <div className="flex space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="jarvis-glow px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all"
            >
              Download CV
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative corner-accent">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="jarvis-glow rounded-lg overflow-hidden"
            >
              <Image 
                src="/me.jpg" 
                alt="Ranjula Ilukpitiya" 
                width={400} 
                height={500} 
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-cyan-400 text-sm flex items-center gap-2"
            >
              <User className="w-3 h-3" />
              Status: Online <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;