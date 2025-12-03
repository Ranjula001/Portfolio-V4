'use client';

const About = () => {
  const aboutData = [
    {
      icon: "💻",
      title: "Currently Working On",
      items: ["React Applications", "Next.js Projects", "Full-stack Development", "API Integrations", "Responsive Design"]
    },
    {
      icon: "🎯",
      title: "Interests",
      items: ["Frontend Development", "UI/UX Design", "Machine Learning", "Web Technologies", "Mobile Apps"]
    },
    {
      icon: "🚀",
      title: "Experience",
      items: ["2 year experience as React Frontend Engineer at Creativus", "Freelance Web Developer", "Open Source Contributor"]
    },
    {
      icon: "📚",
      title: "Fun Fact",
      items: ["Love authentic music & guitar solos ♪", "Fitness enthusiast", "Tech blogger"]
    }
  ];

  return (
    <section id="about" className="py-12 px-6">
      <div className="w-full">
        <h2 className="text-4xl font-bold jarvis-text mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.map((section, index) => (
            <div key={index} className="jarvis-bg rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{section.icon}</span>
                <h3 className="text-xl font-semibold text-cyan-400">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
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