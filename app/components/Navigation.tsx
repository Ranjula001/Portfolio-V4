'use client';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="jarvis-text font-bold text-xl">
            RANJULA.DEV
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#tech" className="nav-link">Tech</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="text-cyan-400 text-sm">
            ● ONLINE
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;