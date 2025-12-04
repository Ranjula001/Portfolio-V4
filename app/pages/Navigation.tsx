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
    <nav className="absolute max-w-7xl w-full top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-6 py-3">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center space-x-8">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a key={href} href={href} className="nav-link flex items-center gap-2">
            <Icon size={18} />
            {label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-semibold">Portfolio</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="mt-4 space-y-2">
            {navItems.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="nav-link flex items-center gap-2 py-2 px-2 rounded hover:bg-cyan-500/10 transition-colors"
              >
                <Icon size={18} />
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
