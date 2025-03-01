"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Header({ className }) {
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
      className={cn("flex w-fit rounded-full border-2 border-stone-900 bg-stone-400 p-1.5 z-50", className)}
      onMouseLeave={handleMouseLeave}
    >
      <Tab setPosition={memoizedSetPosition} sectionId="home">Home</Tab>
      <Tab setPosition={memoizedSetPosition} sectionId="skills">Skills</Tab>
      <Tab setPosition={memoizedSetPosition} sectionId="experience">Experience</Tab>
      <Tab setPosition={memoizedSetPosition} sectionId="projects">Projects</Tab>
      <Tab setPosition={memoizedSetPosition} sectionId="contact">Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
}

const Tab = React.memo(({ children, setPosition, sectionId }) => {
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

  const handleClick = useCallback(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
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