'use client';

import { 
  Monitor, Database, Brain, Settings,
  Code, Layers, Globe, Palette, Zap,
  Server, Cpu, Shield, Cloud, Wrench
} from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={20} className="text-cyan-400" />,
      techs: [
        { name: "React", icon: <Code size={16} /> },
        { name: "Spring Boot", icon: <Layers size={16} /> },
        { name: "Next.js", icon: <Globe size={16} /> },
        { name: "TypeScript", icon: <Code size={16} /> },
        { name: "JavaScript", icon: <Code size={16} /> },
        { name: "Tailwind CSS", icon: <Palette size={16} /> },
        { name: "Material UI", icon: <Palette size={16} /> },
        { name: "Framer Motion", icon: <Zap size={16} /> }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database size={20} className="text-cyan-400" />,
      techs: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Express.js", icon: <Server size={16} /> },
        { name: "PostgreSQL", icon: <Database size={16} /> },
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "Firebase", icon: <Cloud size={16} /> },
        { name: "RESTful APIs", icon: <Globe size={16} /> }
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
    <section id="tech" className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/10 flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <h2 className="text-4xl font-bold jarvis-text mb-12 text-start">Tech Stack</h2>
        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-cyan-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge flex items-center gap-2">
                    <span className="text-cyan-400">{tech.icon}</span>
                    {tech.name}
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