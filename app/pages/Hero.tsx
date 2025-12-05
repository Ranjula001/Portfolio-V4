'use client';

import { motion } from 'framer-motion';
import { User, Cpu } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 mobile-container">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-xs sm:text-sm font-mono flex items-center gap-2 mobile-spacing"
          >
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            {'>'} Initializing_user_profile...
          </motion.div>
          <div className="mobile-spacing">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mobile-text-4xl leading-tight">
              Hi, I&apos;m <span className="jarvis-text">Ranjula Ilukpitiya</span>
            </h1>
            <div className="space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl text-gray-300 mt-3 sm:mt-5">
              <div><span className='text-blue-700'>•</span> Full Stack Developer</div>
              <div><span className='text-fuchsia-700'>•</span> UI/UX Designer</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            I am an undergraduate at SLIIT and a passionate developer who enjoys 
            building modern web applications. I love to learn new technologies and 
            create innovative solutions that make a difference.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <motion.a 
              href="/RanjulaIlukpitiya_Latest_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="jarvis-glow px-4 sm:px-6 py-2 sm:py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all inline-block text-center text-sm sm:text-base"
            >
              Download CV
            </motion.a>
            <motion.a 
              href="https://github.com/Ranjula001?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all inline-block text-center text-sm sm:text-base"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative corner-accent">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="jarvis-glow rounded-lg overflow-hidden"
            >
              <Image 
                src="/me.jpg" 
                alt="Ranjula Ilukpitiya" 
                width={300} 
                height={375} 
                className="object-cover w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[30rem]"
                priority
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/80 px-2 py-1 sm:px-3 sm:py-1 rounded text-cyan-400 text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
            >
              <User className="w-2 h-2 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">Status:</span> Online <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;