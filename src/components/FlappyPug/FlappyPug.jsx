import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GameAssets from './GameAssets';

const GRAVITY = 0.5;
const JUMP_FORCE = -10;
const PIPE_SPEED = 2;
const PIPE_SPACING = 200;
const PIPE_WIDTH = 60;
const GAP_HEIGHT = 150;

const FlappyPug = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  const gameStateRef = useRef({
    pugY: 250,
    pugVelocity: 0,
    pipes: [],
    lastPipeTime: 0,
    animationFrameId: null,
    pugRotation: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Images are now available through window object after GameAssets renders
    const pugImg = window.pugImg;
    const backgroundImg = window.backgroundImg;
    const pipeImg = window.pipeImg;

    const drawPug = () => {
      const { pugY, pugRotation } = gameStateRef.current;
      ctx.save();
      ctx.translate(100, pugY);
      ctx.rotate(pugRotation);
      ctx.drawImage(pugImg, -25, -25, 50, 50);
      ctx.restore();
    };

    const drawPipes = () => {
      gameStateRef.current.pipes.forEach(pipe => {
        // Draw top pipe
        ctx.drawImage(pipeImg, pipe.x, pipe.topHeight - 320, PIPE_WIDTH, 320);
        // Draw bottom pipe
        ctx.drawImage(pipeImg, pipe.x, pipe.topHeight + GAP_HEIGHT, PIPE_WIDTH, 320);
      });
    };

    const drawScore = () => {
      ctx.fillStyle = 'white';
      ctx.font = '32px Arial';
      ctx.fillText(`Score: ${score}`, 10, 40);
      if (gameOver) {
        ctx.fillText(`High Score: ${highScore}`, 10, 80);
        ctx.fillText('Game Over! Click to restart', canvas.width / 2 - 150, canvas.height / 2);
      }
    };

    const updateGame = () => {
      if (!gameStarted || gameOver) return;

      const state = gameStateRef.current;
      
      // Update pug position
      state.pugVelocity += GRAVITY;
      state.pugY += state.pugVelocity;
      state.pugRotation = Math.min(Math.PI / 2, Math.max(-Math.PI / 4, state.pugVelocity * 0.1));

      // Generate new pipes
      if (Date.now() - state.lastPipeTime > PIPE_SPACING) {
        const topHeight = Math.random() * (canvas.height - GAP_HEIGHT - 100) + 50;
        state.pipes.push({
          x: canvas.width,
          topHeight,
          passed: false
        });
        state.lastPipeTime = Date.now();
      }

      // Update pipes
      state.pipes = state.pipes.filter(pipe => {
        pipe.x -= PIPE_SPEED;
        
        // Check for score
        if (!pipe.passed && pipe.x < 100) {
          pipe.passed = true;
          setScore(prev => prev + 1);
        }
        
        // Check for collision
        if (
          100 < pipe.x + PIPE_WIDTH &&
          100 + 50 > pipe.x &&
          (state.pugY < pipe.topHeight || state.pugY > pipe.topHeight + GAP_HEIGHT)
        ) {
          setGameOver(true);
          setHighScore(prev => Math.max(prev, score));
          return false;
        }
        
        return pipe.x > -PIPE_WIDTH;
      });

      // Check boundaries
      if (state.pugY > canvas.height || state.pugY < 0) {
        setGameOver(true);
        setHighScore(prev => Math.max(prev, score));
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
      drawPipes();
      drawPug();
      drawScore();
      updateGame();
      
      if (!gameOver) {
        gameStateRef.current.animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleClick = () => {
      if (gameOver) {
        // Reset game
        gameStateRef.current = {
          pugY: 250,
          pugVelocity: 0,
          pipes: [],
          lastPipeTime: 0,
          animationFrameId: null,
          pugRotation: 0
        };
        setScore(0);
        setGameOver(false);
      }
      
      if (!gameStarted) {
        setGameStarted(true);
      }
      
      gameStateRef.current.pugVelocity = JUMP_FORCE;
    };

    canvas.addEventListener('click', handleClick);
    
    if (gameStarted && !gameOver) {
      render();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
      drawPug();
      drawScore();
      if (!gameStarted) {
        ctx.fillStyle = 'white';
        ctx.font = '24px Arial';
        ctx.fillText('Click to Start', canvas.width / 2 - 70, canvas.height / 2);
      }
    }

    return () => {
      canvas.removeEventListener('click', handleClick);
      if (gameStateRef.current.animationFrameId) {
        cancelAnimationFrame(gameStateRef.current.animationFrameId);
      }
    };
  }, [gameStarted, gameOver, score, highScore]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-slate-900">
      <GameAssets />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border-4 border-indigo-600 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default FlappyPug; 