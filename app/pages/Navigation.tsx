"use client";

import { Home, User, FolderOpen, Cpu, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="absolute max-w-7xl w-full top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-6 py-3 scroll-smooth">
      <div className="flex items-center justify-center space-x-8">
        <a href="#home" className="nav-link flex items-center gap-2">
          <Home size={18} />
          Home
        </a>
        <a href="#about" className="nav-link flex items-center gap-2">
          <User size={18} />
          About
        </a>
        <a href="#projects" className="nav-link flex items-center gap-2">
          <FolderOpen size={18} />
          Projects
        </a>
        <a href="#tech" className="nav-link flex items-center gap-2">
          <Cpu size={18} />
          Tech
        </a>
        <a href="#contact" className="nav-link flex items-center gap-2">
          <Mail size={18} />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
