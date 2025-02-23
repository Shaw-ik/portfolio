"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

function Header() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const memoizedSetPosition = useCallback(
    (newPosition) => {
      setPosition(newPosition);
    },
    [setPosition]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition((pv) => ({ ...pv, opacity: 0 }));
  }, [setPosition]);

  return (
    <ul
      className="fixed top-0 left-1/2 -translate-x-1/2 flex w-fit rounded-full border-2 border-stone-900 bg-stone-400 p-1.5 z-50 mt-4"
      onMouseLeave={handleMouseLeave}
    >
      <Tab setPosition={memoizedSetPosition}>Home</Tab>
      <Tab setPosition={memoizedSetPosition}>Skills</Tab>
      <Tab setPosition={memoizedSetPosition}>Experience</Tab>
      <Tab setPosition={memoizedSetPosition}>Projects</Tab>
      <Tab setPosition={memoizedSetPosition}>Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
}

const Tab = React.memo(({ children, setPosition }) => {
  const ref = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  }, [setPosition]);

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-2 block cursor-pointer px-3 py-1.5 text-xs uppercase text-stone-400 mix-blend-difference md:px-6 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
});

const Cursor = React.memo(({ position }) => {
  const style = {
    left: position.left,
    width: position.width,
    opacity: position.opacity,
    transition: "left 0.1s ease-in-out, width 0.3s ease-in-out, opacity 0.1s ease-in-out",
  };

  return (
    <li
      style={style}
      className="absolute z-1 h-7 rounded-full bg-stone-900 md:h-12"
    />
  );
});

export default Header;