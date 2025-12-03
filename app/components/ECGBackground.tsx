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
      
      // Draw segments with individual glow and fade
      for (let i = 0; i < trailLength - 1; i++) {
        const trailX1 = ((offset - i) * 2) % canvas.width;
        const trailX2 = ((offset - i - 1) * 2) % canvas.width;
        const cycle1 = (offset - i) % (beatWidth + restTime);
        const cycle2 = (offset - i - 1) % (beatWidth + restTime);
        
        let y1 = centerY, y2 = centerY;
        let isSpike1 = false, isSpike2 = false;
        
        // Calculate y1
        if (cycle1 >= 0 && cycle1 < beatWidth) {
          const progress = cycle1 / beatWidth;
          if (progress < 0.3) {
            y1 = centerY - 120 * Math.sin(progress * 10);
            isSpike1 = true;
          } else if (progress < 0.6) {
            y1 = centerY + 80 * Math.sin((progress - 0.3) * 10);
            isSpike1 = true;
          } else if (progress < 0.8) {
            y1 = centerY - 50 * Math.sin((progress - 0.6) * 15);
            isSpike1 = true;
          }
        }
        
        // Calculate y2
        if (cycle2 >= 0 && cycle2 < beatWidth) {
          const progress = cycle2 / beatWidth;
          if (progress < 0.3) {
            y2 = centerY - 120 * Math.sin(progress * 10);
            isSpike2 = true;
          } else if (progress < 0.6) {
            y2 = centerY + 80 * Math.sin((progress - 0.3) * 10);
            isSpike2 = true;
          } else if (progress < 0.8) {
            y2 = centerY - 50 * Math.sin((progress - 0.6) * 15);
            isSpike2 = true;
          }
        }
        
        const fadeAlpha = Math.max(0, 1 - i / trailLength);
        const hasSpike = isSpike1 || isSpike2;
        
        if (fadeAlpha > 0.02) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${fadeAlpha * 0.7})`;
          ctx.lineWidth = hasSpike ? 3 : 2;
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = hasSpike ? 30 * fadeAlpha : 8 * fadeAlpha;
          
          ctx.beginPath();
          ctx.moveTo(trailX1, y1);
          ctx.lineTo(trailX2, y2);
          ctx.stroke();
        }
      }
      
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
      style={{ zIndex: 0 }}
    />
  );
};

export default ECGBackground;