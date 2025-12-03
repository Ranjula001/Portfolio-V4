'use client';

import { useEffect, useRef } from 'react';

const ECGBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawECG = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerY = canvas.height / 2;
      const beatWidth = 80;
      const restTime = 200;
      const trailLength = 200;
      
      // Draw connected line trail
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      let firstPoint = true;
      
      for (let i = trailLength; i >= 0; i--) {
        const trailX = ((offset - i) * 2) % canvas.width;
        const cycle = (offset - i) % (beatWidth + restTime);
        let y = centerY;
        
        if (cycle >= 0 && cycle < beatWidth) {
          const progress = cycle / beatWidth;
          
          if (progress < 0.3) {
            y = centerY - 120 * Math.sin(progress * 10);
          } else if (progress < 0.6) {
            y = centerY + 80 * Math.sin((progress - 0.3) * 10);
          } else if (progress < 0.8) {
            y = centerY - 50 * Math.sin((progress - 0.6) * 15);
          }
        }
        
        const alpha = Math.max(0, 0.3 - i / trailLength);
        ctx.globalAlpha = alpha;
        
        if (firstPoint) {
          ctx.moveTo(trailX, y);
          firstPoint = false;
        } else {
          ctx.lineTo(trailX, y);
        }
      }
      ctx.stroke();
      
      ctx.globalAlpha = 1;
      

      
      offset += 2;
      animationId = requestAnimationFrame(drawECG);
    };

    resizeCanvas();
    drawECG();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ECGBackground;