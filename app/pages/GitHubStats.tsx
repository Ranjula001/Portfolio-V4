'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const [animatedStats, setAnimatedStats] = useState([
    { label: "Active", value: 0, target: 50, subtitle: "Repositories" },
    { label: "Commits", value: 0, target: 25, subtitle: "This Year" }
  ]);

  const [languageProgress, setLanguageProgress] = useState([
    { name: "JavaScript", percentage: 0, target: 50 },
    { name: "TypeScript", percentage: 0, target: 50 },
    { name: "Python", percentage: 0, target: 35 },
    { name: "CSS", percentage: 0, target: 50 }
  ]);

  useEffect(() => {
    // Animate stats counter
    const statsTimer = setInterval(() => {
      setAnimatedStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value < stat.target ? stat.value + 1 : stat.target
      })));
    }, 500);

    // Animate language progress bars
    const langTimer = setTimeout(() => {
      setLanguageProgress(prev => prev.map(lang => ({
        ...lang,
        percentage: lang.target
      })));
    }, 5000);

    return () => {
      clearInterval(statsTimer);
      clearTimeout(langTimer);
    };
  }, []);



  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/10 flex items-center justify-center z-50">
      <div className="flex flex-col max-w-7xl w-full">
        <div className="text-cyan-400 text-sm font-mono mb-2 text-start">{'>'} Fetching_github_status...</div>
        {/* <h2 className="text-4xl font-bold jarvis-text mb-12 text-start">GitHub Stats</h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Activity Overview</h3>
            <div className="grid grid-cols-2 gap-6">
              {animatedStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="jarvis-bg rounded-lg p-6 text-center border border-cyan-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-3xl font-bold jarvis-text mb-2">{stat.value}+</div>
                  <div className="text-cyan-400 font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.subtitle}</div>
                </motion.div>
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
              {languageProgress.map((lang, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-cyan-400">{lang.target}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;