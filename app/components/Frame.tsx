'use client';

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Corner Borders - Responsive to screen size */}
      <div className="fixed top-2 left-2 w-12 h-12 sm:top-4 sm:left-4 sm:w-16 sm:h-16 z-50">
        <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-cyan-400"></div>
        <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed top-2 right-2 w-12 h-12 sm:top-4 sm:right-4 sm:w-16 sm:h-16 z-50">
        <div className="absolute top-0 right-0 w-full h-1 sm:h-2 bg-cyan-400"></div>
        <div className="absolute top-0 right-0 w-1 sm:w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-2 left-2 w-12 h-12 sm:bottom-4 sm:left-4 sm:w-16 sm:h-16 z-50">
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-1 sm:w-2 h-full bg-cyan-400"></div>
      </div>
      <div className="fixed bottom-2 right-2 w-12 h-12 sm:bottom-4 sm:right-4 sm:w-16 sm:h-16 z-50">
        <div className="absolute bottom-0 right-0 w-full h-1 sm:h-2 bg-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-1 sm:w-2 h-full bg-cyan-400"></div>
      </div>
      
      {/* Scrollable content container - Mobile responsive padding */}
      <div className="absolute inset-0 overflow-y-auto px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 scroll-smooth">
        {children}
      </div>
    </div>
  );
}