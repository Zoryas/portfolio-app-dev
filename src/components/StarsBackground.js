import React, { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars = [];
    const numberOfStars = 150;

    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        speed: Math.random() * 0.3,
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    const animate = () => {
      // Clear with dark background but not completely black
      ctx.fillStyle = 'rgba(10, 10, 30, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkling effect
        star.opacity = 0.2 + 0.4 * Math.abs(Math.sin(Date.now() * 0.001 + star.x * 0.01));
      });

      // Draw some constellation lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const distance = Math.sqrt(
            Math.pow(stars[i].x - stars[j].x, 2) + 
            Math.pow(stars[i].y - stars[j].y, 2)
          );
          if (distance < 100) {
            const opacity = 0.05 + 0.05 * Math.sin(Date.now() * 0.001 + distance * 0.01);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="stars-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarsBackground;