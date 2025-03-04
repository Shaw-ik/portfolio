import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PugIcon } from './GameAssets';

const GameLauncher = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/flappy-pug')}
    >
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        className="rounded-full shadow-lg border-2 border-indigo-600"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="32" fill="#F4D03F" />
        {/* Face */}
        <circle cx="24" cy="28" r="4" fill="#2C3E50" /> {/* Left eye */}
        <circle cx="40" cy="28" r="4" fill="#2C3E50" /> {/* Right eye */}
        <ellipse cx="32" cy="38" rx="8" ry="6" fill="#95A5A6" /> {/* Nose */}
        <path d="M24 42 Q32 48 40 42" stroke="#2C3E50" fill="none" strokeWidth="2" /> {/* Smile */}
      </motion.svg>
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-900/80 px-3 py-1 rounded-full text-sm text-white whitespace-nowrap opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        Play Flappy Pug!
      </motion.div>
    </motion.div>
  );
};

export default GameLauncher; 