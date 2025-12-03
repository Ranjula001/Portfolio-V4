'use client';

const GitHubStats = () => {
  const stats = [
    { label: "Active", value: "50+", subtitle: "Repositories" },
    { label: "Commits", value: "25+", subtitle: "This Year" }
  ];

  const languages = [
    { name: "JavaScript", percentage: 50 },
    { name: "TypeScript", percentage: 50 },
    { name: "Python", percentage: 35 },
    { name: "CSS", percentage: 50 }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/10 flex items-center justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <h2 className="text-4xl font-bold jarvis-text mb-12 text-center">GitHub Stats</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Activity Overview</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="jarvis-bg rounded-lg p-6 text-center border border-cyan-500/20">
                  <div className="text-3xl font-bold jarvis-text mb-2">{stat.value}</div>
                  <div className="text-cyan-400 font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.subtitle}</div>
                </div>
              ))}
            </div>
            <div className="jarvis-bg rounded-lg p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">GitHub Stats</h4>
              <div className="text-gray-300">
                <div className="flex justify-between mb-2">
                  <span>Total Repositories:</span>
                  <span className="text-cyan-400">50+</span>
                </div>
                <div className="flex justify-between">
                  <span>Contributions:</span>
                  <span className="text-cyan-400">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Top Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-cyan-400">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;