"use client";

const Navigation = () => {
  return (
    <nav className="absolute min-w-6xl w-full top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-6 py-3">
      <div className="flex items-center justify-center space-x-8">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#tech" className="nav-link">Tech</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
