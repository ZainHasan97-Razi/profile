import React, { useRef, useEffect, useState } from "react";

const Canvas = ({ particlesCount, data }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth - 64,
    height: window.innerHeight / 2 - 64,
  });

  const isMobileView = React.useMemo(() => {
    return window.innerWidth < 768;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth - 64,
        height: window.innerHeight / 2 - 64,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const particleSize = isMobileView ? 50 : 80;
    const radius = particleSize / 2;

    const particles = data.map((skill) => {
      const img = new Image();
      img.src = skill.icon;
      return {
        x: Math.random() * (dimensions.width - particleSize),
        y: Math.random() * (dimensions.height - particleSize),
        img,
        velocityX: (Math.random() - 0.5) * 2,
        velocityY: (Math.random() - 0.5) * 2,
      };
    });

    const drawParticle = (particle) => {
      context.save();
      context.beginPath();
      context.arc(particle.x + radius, particle.y + radius, radius, 0, Math.PI * 2, true);
      context.closePath();
      context.clip();

      context.drawImage(particle.img, particle.x, particle.y, particleSize, particleSize);

      context.restore();
    };

    const updateParticle = (particle) => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x + particleSize > dimensions.width) particle.velocityX *= -1;
      if (particle.y < 0 || particle.y + particleSize > dimensions.height) particle.velocityY *= -1;
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
