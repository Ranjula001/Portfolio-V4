'use client';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      techs: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Framer Motion"]
    },
    {
      title: "Backend & Database",
      techs: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "Prisma ORM"]
    },
    {
      title: "Machine Learning / CV",
      techs: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "Tools & DevOps",
      techs: ["Git", "GitHub", "Docker", "Azure DevOps", "Postman"]
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold jarvis-text mb-12 text-center">Tech Stack</h2>
        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">● {category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
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