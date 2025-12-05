'use client';

import React from 'react';
import { Zap, UtensilsCrossed, Building2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Zap size={24} className="text-cyan-400" />,
      title: "FitGenius",
      description: "AI-powered fitness tracking app with computer vision for exercise form analysis and personalized workout recommendations.",
      tech: ["Flutter", "Computer Vision", "TensorFlow", "Python"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      icon: <UtensilsCrossed size={24} className="text-cyan-400" />,
      title: "MealPrep",
      description: "Meal planning dashboard with integrated forms, tables, and data visualizations for comprehensive meal planning and management.",
      tech: ["React.js", "AntDesign", "API Integration"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      icon: <Building2 size={24} className="text-cyan-400" />,
      title: "ERP System Modules",
      description: "Developed comprehensive ERP modules including employee management, subscription systems, and role & permission-based dashboards.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Material UI"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 mobile-container flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-cyan-400 text-xs sm:text-sm font-mono mb-2 text-start">{'>'} Loading_projects...</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold jarvis-text text-start mobile-text-4xl">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg space-y-3 sm:space-y-4 p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex-shrink-0">
                  {React.cloneElement(project.icon, { 
                    size: typeof window !== 'undefined' && window.innerWidth < 430 ? 20 : 24,
                    className: "text-cyan-400" 
                  })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 leading-tight">{project.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 pt-3 sm:pt-4">
                <a href={project.links.demo} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm sm:text-base">
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  Live Demo
                </a>
                <a href={project.links.github} className="text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-1 text-sm sm:text-base">
                  <Github size={14} className="sm:w-4 sm:h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;