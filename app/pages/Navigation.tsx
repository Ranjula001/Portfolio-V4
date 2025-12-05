"use client";

import { useState } from 'react';
import { Home, User, FolderOpen, Cpu, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: FolderOpen, label: "Projects" },
    { href: "#tech", icon: Cpu, label: "Tech" },
    { href: "#contact", icon: Mail, label: "Contact" }
  ];

  return (
    <nav className="absolute max-w-7xl w-full top-16 sm:top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg mx-4 sm:mx-6 px-3 sm:px-6 py-2 sm:py-3">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a key={href} href={href} className="nav-link flex items-center gap-2">
            <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-sm lg:text-base">{label}</span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-semibold text-sm sm:text-base">Portfolio</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-1"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
            {navItems.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="nav-link flex items-center gap-2 py-2 px-2 rounded hover:bg-cyan-500/10 transition-colors text-sm sm:text-base"
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
