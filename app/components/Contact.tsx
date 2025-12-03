'use client';

const Contact = () => {
  const contactMethods = [
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Ranjula Ilukpitiya",
      link: "https://linkedin.com/in/ranjula-ilukpitiya"
    },
    {
      icon: "🐙",
      title: "GitHub", 
      value: "@ranjula",
      link: "https://github.com/ranjula"
    },
    {
      icon: "📧",
      title: "Email",
      value: "ranjula@example.com",
      link: "mailto:ranjula@example.com"
    },
    {
      icon: "📱",
      title: "Portfolio",
      value: "ranjula.dev",
      link: "https://ranjula.dev"
    }
  ];

  return (
    <section id="contact" className="py-12 px-6">
      <div className="w-full text-center">
        <div className="mb-8">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'>'} Establishing_connection...</div>
          <h2 className="text-4xl font-bold jarvis-text mb-4">Connect With Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="jarvis-bg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <div className="text-3xl mb-3">{method.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{method.title}</h3>
              <p className="text-gray-300 group-hover:text-cyan-300 transition-colors">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="jarvis-bg rounded-lg p-8 border border-cyan-500/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold jarvis-text mb-4">Thanks for visiting!</h3>
          <p className="text-gray-400 mb-6">
            Feel free to star repositories or reach out for collaborations.
          </p>
          <div className="text-cyan-400 font-mono text-sm">
            {'>'} System_status: Online ● Ready_for_new_connections
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;