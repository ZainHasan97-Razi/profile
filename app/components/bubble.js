import React, { useRef, useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const Canvas = ({ particlesCount, data }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth - 100, height: window.innerHeight / 2 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const particles = data.map((skill) => {
      // const svgString = renderToStaticMarkup(skill.icon);
      const img = new Image();
      // img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
      img.src = `${skill.icon}`;
      return {
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        img,
        velocityX: (Math.random() - 0.5) * 2,
        velocityY: (Math.random() - 0.5) * 2,
      };
    });

    const drawParticle = (particle) => {
      const radius = 40; // Half of the image size to make it round
      const size = 80; // Size of the image

      context.save(); // Save the current state
      context.beginPath();
      context.arc(particle.x + radius, particle.y + radius, radius, 0, Math.PI * 2, true);
      context.closePath();
      context.clip();

      context.drawImage(particle.img, particle.x, particle.y, size, size);

      context.restore(); // Restore the previous state
    };

    const updateParticle = (particle) => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > dimensions.width) particle.velocityX *= -1;
      if (particle.y < 0 || particle.y > dimensions.height) particle.velocityY *= -1;
    };

    const animate = () => {
      context.clearRect(0, 0, dimensions.width, dimensions.height);
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, [particlesCount, dimensions, data]);

  return <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} />;
};

export default Canvas;
