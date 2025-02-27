"use client";
import React, { useState, useEffect } from "react";
import { Boxes } from "@/components/Background-boxes";
import { WavyBackground } from "@/components/WavyBackground";
import { cn } from "@/lib/utils";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Consider 768px and below as mobile
    };

    checkMobile(); // Check on initial render
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-stone-800 flex flex-col items-center justify-center rounded-lg h-[840px]">
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 w-full h-full bg-stone-800 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Conditional rendering of background */}
      {isMobile ? (
        <WavyBackground 
          className="w-full h-full" 
          colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
          blur={10}
          speed="fast"
          waveOpacity={0.5}
        />
      ) : (
        <Boxes />
      )}

      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className={cn("md:text-4xl text-xl text-white")}>
          Hello everyone!
        </h1>
        <p className="text-center mt-2 text-neutral-300">
          Framer motion is the best animation library ngl
        </p>
      </div>
    </div>
  );
}

export default Home;
