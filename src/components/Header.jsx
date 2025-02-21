"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    (<ul
      className="sticky mx-auto flex w-fit rounded-full border-2 border-stone-900 bg-stone-400 p-1.5 z-50"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}>
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Skills</Tab>
      <Tab setPosition={setPosition}>Experience</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Cursor position={position} />
    </ul>)
  );
}

const Tab = ({
  children,
  setPosition
}) => {
  const ref = useRef(null);
  return (
    (<li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-2 block cursor-pointer px-3 py-1.5 text-xs uppercase text-stone-400 mix-blend-difference md:px-6 md:py-3 md:text-base">
      {children}
    </li>)
  );
};

const Cursor = ({
  position
}) => {
  return (
    (<motion.li
      animate={position}
      className="absolute z-1 h-7 rounded-full bg-stone-900 md:h-12" />)
  );
};

export default Header;
