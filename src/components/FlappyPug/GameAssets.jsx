import React from 'react';

// Convert SVG to data URL for canvas usage
const svgToDataURL = (svgElement) => {
  const svgString = new XMLSerializer().serializeToString(svgElement);
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

// Pug character with wings
export const PugImage = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    if (svgRef.current) {
      const dataUrl = svgToDataURL(svgRef.current);
      const img = new Image();
      img.src = dataUrl;
      window.pugImg = img; // Store in window for canvas access
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      style={{ display: 'none' }}
    >
      {/* Pug body */}
      <circle cx="50" cy="50" r="30" fill="#F4D03F" />
      {/* Wings */}
      <ellipse cx="20" cy="50" rx="15" ry="10" fill="#F4D03F" />
      <ellipse cx="80" cy="50" rx="15" ry="10" fill="#F4D03F" />
      {/* Face */}
      <circle cx="40" cy="45" r="5" fill="#2C3E50" /> {/* Left eye */}
      <circle cx="60" cy="45" r="5" fill="#2C3E50" /> {/* Right eye */}
      <ellipse cx="50" cy="60" rx="10" ry="8" fill="#95A5A6" /> {/* Nose */}
    </svg>
  );
};

// Pipe obstacle
export const PipeImage = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    if (svgRef.current) {
      const dataUrl = svgToDataURL(svgRef.current);
      const img = new Image();
      img.src = dataUrl;
      window.pipeImg = img;
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="60"
      height="320"
      viewBox="0 0 60 320"
      style={{ display: 'none' }}
    >
      <rect width="60" height="320" fill="#27AE60" />
      <rect x="5" width="50" height="20" fill="#2ECC71" />
      <rect x="5" y="300" width="50" height="20" fill="#2ECC71" />
    </svg>
  );
};

// Background
export const BackgroundImage = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    if (svgRef.current) {
      const dataUrl = svgToDataURL(svgRef.current);
      const img = new Image();
      img.src = dataUrl;
      window.backgroundImg = img;
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="800"
      height="600"
      viewBox="0 0 800 600"
      style={{ display: 'none' }}
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3498DB" />
          <stop offset="100%" stopColor="#85C1E9" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyGradient)" />
      
      {/* Clouds */}
      <g fill="#FFFFFF" opacity="0.8">
        <circle cx="100" cy="100" r="30" />
        <circle cx="130" cy="100" r="25" />
        <circle cx="160" cy="100" r="20" />
        
        <circle cx="600" cy="150" r="30" />
        <circle cx="630" cy="150" r="25" />
        <circle cx="660" cy="150" r="20" />
      </g>
      
      {/* Ground */}
      <rect y="500" width="800" height="100" fill="#2ECC71" />
    </svg>
  );
};

// Pug icon for launcher
export const PugIcon = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    if (svgRef.current) {
      const dataUrl = svgToDataURL(svgRef.current);
      const img = new Image();
      img.src = dataUrl;
      window.pugIconImg = img;
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      style={{ display: 'none' }}
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="32" fill="#F4D03F" />
      {/* Face */}
      <circle cx="24" cy="28" r="4" fill="#2C3E50" /> {/* Left eye */}
      <circle cx="40" cy="28" r="4" fill="#2C3E50" /> {/* Right eye */}
      <ellipse cx="32" cy="38" rx="8" ry="6" fill="#95A5A6" /> {/* Nose */}
      <path d="M24 42 Q32 48 40 42" stroke="#2C3E50" fill="none" strokeWidth="2" /> {/* Smile */}
    </svg>
  );
};

// Component to render all game assets
const GameAssets = () => {
  return (
    <div style={{ display: 'none' }}>
      <PugImage />
      <PipeImage />
      <BackgroundImage />
      <PugIcon />
    </div>
  );
};

export default GameAssets; 