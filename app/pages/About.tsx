'use client';

import React from 'react';
import { Code, Target, Rocket, BookOpen, ChevronRight } from 'lucide-react';

const About = () => {
  const aboutData = [
    {
      icon: <Code size={24} className="text-cyan-400" />,
      title: "Currently Working On",
      items: ["React Applications", "Next.js Projects", "Full-stack Development", "API Integrations", "Responsive Design"]
    },
    {
      icon: <Target size={24} className="text-cyan-400" />,
      title: "Interests",
      items: ["Machine Learning", "Web Technologies", "Game Development", "E-Sports", "Kart Racing" ]
    },
    {
      icon: <Rocket size={24} className="text-cyan-400" />,
      title: "Experience",
      items: ["Completed +1 year internship at CODEZILLA", "UI/UX & Frontend Engineer at KynoLabs", "Freelance Web Developer", "Open Source Contributor"]
    },
    {
      icon: <BookOpen size={24} className="text-cyan-400" />,
      title: "Fun Fact",
      items: ["Love authentic music & guitar solos ♪"]
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 mobile-container flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-start font-bold jarvis-text mb-8 sm:mb-12 py-3 sm:py-5 mobile-text-4xl">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {aboutData.map((section, index) => (
            <div key={index} className="jarvis-bg rounded-lg p-4 sm:p-6 border border-cyan-500/20">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="mr-2 sm:mr-3 flex-shrink-0">
                  {React.cloneElement(section.icon, { 
                    size: typeof window !== 'undefined' && window.innerWidth < 430 ? 20 : 24,
                    className: "text-cyan-400" 
                  })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 leading-tight">{section.title}</h3>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start text-sm sm:text-base">
                    <ChevronRight size={14} className="text-cyan-400 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;