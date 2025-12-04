'use client';

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
    <section id="about" className="py-20 px-6 flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <h2 className="text-4xl text-start font-bold jarvis-text mb-12 py-5">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.map((section, index) => (
            <div key={index} className="jarvis-bg rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="mr-3">{section.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-center">
                    <ChevronRight size={16} className="text-cyan-400 mr-2 flex-shrink-0" />
                    {item}
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