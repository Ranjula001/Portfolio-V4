'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-cyan-400 text-sm font-mono">
            {'>'} Initializing_user_profile...
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="jarvis-text">Ranjula Ilukpitiya</span>
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
            <button className="jarvis-glow px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all">
              Download CV
            </button>
            <button className="px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all">
              View Projects
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="jarvis-glow rounded-lg overflow-hidden">
              <Image 
                src="/me.jpg" 
                alt="Ranjula Ilukpitiya" 
                width={400} 
                height={500} 
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-cyan-400 text-sm">
              Status: Online ●
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;