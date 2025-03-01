"use client";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import PropTypes from "prop-types";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let w, h, nt, i, x;

    const init = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      nt = 0;
    };

    const waveColors = colors ?? [
      "#06b6d4", // Cyan-500
      "#8b5cf6", // Violet-500
      "#ec4899", // Pink-500
      "#3b82f6", // Blue-500
      "#06b6d4", // Cyan-500
    ];

    const drawWave = (n, direction) => {
      nt += getSpeed();
      for (i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise((x + nt * 100) / 800, (h * 0.5 + nt * 100) / 800, 0.3 * i) * 100;
          // Direction determines the slant: 1 for one way, -1 for the opposite
          ctx.lineTo(x, y + h * 0.5 + (x - w / 2) * 0.5 * direction);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill || "rgb(15, 23, 42)"; // slate-900 color
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      // Draw two sets of waves with opposite directions to form an "X"
      drawWave(5, 1);  // First set of waves (top-left to bottom-right)
      drawWave(5, -1); // Second set of waves (top-right to bottom-left)
      animationId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, colors, waveWidth, backgroundFill, waveOpacity, speed]);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${containerClassName}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className={`relative z-10 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

WavyBackground.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  waveWidth: PropTypes.number,
  backgroundFill: PropTypes.string,
  blur: PropTypes.number,
  speed: PropTypes.oneOf(["slow", "fast"]),
  waveOpacity: PropTypes.number,
};

export default WavyBackground;