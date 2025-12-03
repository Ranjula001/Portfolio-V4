'use client';

const Projects = () => {
  const projects = [
    {
      icon: "🔥",
      title: "FitGenius",
      description: "AI-powered fitness tracking app with computer vision for exercise form analysis and personalized workout recommendations.",
      tech: ["React.js", "Computer Vision", "TensorFlow", "Node.js"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      icon: "🍽️",
      title: "MealPrep",
      description: "Meal planning dashboard with integrated forms, tables, and data visualizations for comprehensive meal planning and management.",
      tech: ["React.js", "JavaScript", "CSS", "API Integration"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      icon: "🏢",
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'>'} Loading_projects...</div>
          <h2 className="text-4xl font-bold jarvis-text">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{project.icon}</span>
                <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 pt-4">
                <a href={project.links.demo} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Live Demo →
                </a>
                <a href={project.links.github} className="text-gray-400 hover:text-gray-300 transition-colors">
                  GitHub →
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