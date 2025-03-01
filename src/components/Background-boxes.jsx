"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Predefined colors array outside component to prevent recreations
const COLORS = [
  "rgb(125 211 252)", // sky-300
  "rgb(249 168 212)", // pink-300
  "rgb(134 239 172)", // green-300
  "rgb(253 224 71)",  // yellow-300
  "rgb(252 165 165)", // red-300
  "rgb(216 180 254)", // purple-300
  "rgb(147 197 253)", // blue-300
  "rgb(165 180 252)", // indigo-300
  "rgb(196 181 253)", // violet-300
];

// Extract SVG to a separate component
const PlusIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-600 stroke-[1px] pointer-events-none"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m6-6H6"
    />
  </svg>  
));

// Single cell component
const Cell = React.memo(({ showIcon }) => {
  // Using useState instead of animate for better control
  const [color, setColor] = useState(null);
  
  const handleHoverStart = useCallback(() => {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
  }, []);
  
  const handleHoverEnd = useCallback(() => {
    setColor(null);
  }, []);

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ backgroundColor: color }}
      className="w-16 h-8 border-r border-t border-stone-700 relative"
    >
      {showIcon && <PlusIcon />}
    </motion.div>
  );
});

// Row component to further split rendering
const Row = React.memo(({ index, columnCount }) => {
  // Pre-calculate which cells should show icons
  const cells = useMemo(() => 
    Array(columnCount).fill(0).map((_, j) => ({
      key: `col${j}`,
      showIcon: j % 2 === 0 && index % 2 === 0
    })),
    [columnCount, index]
  );

  return (
    <motion.div className="w-16 h-8 border-l relative">
      {cells.map((cell) => (
        <Cell key={cell.key} showIcon={cell.showIcon} />
      ))}
    </motion.div>
  );
});

export const BoxesCore = ({ className, ...rest }) => {
  // Reducing grid size - consider making this configurable
  const ROW_COUNT = 80; // Reduced from 150
  const COL_COUNT = 50; // Reduced from 100
  
  // Only create row indices once
  const rows = useMemo(() => 
    Array(ROW_COUNT).fill(0).map((_, i) => i),
    [ROW_COUNT]
  );

  // Apply transform as a memoized style object
  const transformStyle = useMemo(() => ({
    transform: `translate(-50%, 100%) skewX(48deg) skewY(-14deg) scale(1.1) rotate(0deg) translateZ(0)`,
    // Force hardware acceleration
    willChange: 'transform',
  }), []);

  return (
    <div
      style={transformStyle}
      className={cn(
        "absolute left-1/2 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((i) => (
        <Row key={`row${i}`} index={i} columnCount={COL_COUNT} />
      ))}
    </div>
  );
};

// Using React.memo for the exported component too
export const Boxes = React.memo(BoxesCore);