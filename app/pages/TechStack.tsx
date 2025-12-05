'use client';

import React from 'react';
import { 
  Monitor, Database, Brain, Settings,
  Code, Layers, Globe, Palette, Zap,
  Server, Cpu, Cloud, Wrench, ServerCog,
  CloudCog,
} from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: <Monitor size={20} className="text-cyan-400" />,
      techs: [
        { name: "React", icon: <Code size={16} /> },
        { name: "Next.js", icon: <Globe size={16} /> },
        { name: "TypeScript", icon: <Code size={16} /> },
        { name: "JavaScript", icon: <Code size={16} /> },
        { name: "Tailwind CSS", icon: <Palette size={16} /> },
        { name: "Material UI", icon: <Palette size={16} /> },
        { name: "Framer Motion", icon: <Zap size={16} /> }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <ServerCog size={20} className="text-cyan-400" />,
      techs: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Spring Boot", icon: <Layers size={16} /> },
        { name: "Express.js", icon: <Server size={16} /> },
        { name: "RESTful APIs", icon: <Globe size={16} /> }
      ]
    },
        {
      title: "Database",
      icon: <Database size={20} className="text-cyan-400" />,
      techs: 
      [
        { name: "PostgreSQL", icon: <Database size={16} /> },
        { name: "MongoDB", icon: <CloudCog size={16} /> },
        { name: "Firebase", icon: <CloudCog size={16} /> },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={20} className="text-cyan-400" />,
      techs: [
        { name: "Python", icon: <Code size={16} /> },
        { name: "TensorFlow", icon: <Brain size={16} /> },
        { name: "OpenCV", icon: <Brain size={16} /> },
        { name: "Scikit-learn", icon: <Brain size={16} /> },
        { name: "Pandas", icon: <Cpu size={16} /> },
        { name: "NumPy", icon: <Cpu size={16} /> }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings size={20} className="text-cyan-400" />,
      techs: [
        { name: "GitHub", icon: <Code size={16} /> },
        { name: "Docker", icon: <Layers size={16} /> },
        { name: "Azure", icon: <Cloud size={16} /> },
        { name: "AWS", icon: <Cloud size={16} /> },
        { name: "Postman", icon: <Wrench size={16} /> }
      ]
    }
  ];

  return (
    <section id="tech" className="py-12 sm:py-16 md:py-20 mobile-container bg-gradient-to-b from-transparent to-cyan-950/10 flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold jarvis-text mb-8 sm:mb-12 text-start mobile-text-4xl">Tech Stack</h2>
        <div className="space-y-6 sm:space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  {React.cloneElement(category.icon, { 
                    size: typeof window !== 'undefined' && window.innerWidth < 430 ? 18 : 20,
                    className: "text-cyan-400" 
                  })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 leading-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge flex items-center gap-1.5 sm:gap-2">
                    <span className="text-cyan-400 flex-shrink-0">
                      {React.cloneElement(tech.icon, { 
                        size: typeof window !== 'undefined' && window.innerWidth < 430 ? 12 : 16 
                      })}
                    </span>
                    <span className="text-xs sm:text-sm">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;