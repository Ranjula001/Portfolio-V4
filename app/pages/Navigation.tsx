"use client";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20 w-full">
      <div className="flex justify-center px-4 py-4">
        <div className="flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#tech" className="nav-link">Tech</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
