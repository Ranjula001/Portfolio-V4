'use client';

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Corner Borders - Fixed to viewport */}
      <div className="fixed top-4 left-4 w-16 h-16 z-50">
        <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed top-4 right-4 w-16 h-16 z-50">
        <div className="absolute top-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-4 left-4 w-16 h-16 z-50">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-4 right-4 w-16 h-16 z-50">
        <div className="absolute bottom-0 right-0 w-full h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-2 h-full bg-cyan-400"></div>
      </div>
      
      {/* Scrollable content container */}
      <div className="absolute inset-0 overflow-y-auto px-20 py-20 scroll-smooth">
        {children}
      </div>
    </div>
  );
}