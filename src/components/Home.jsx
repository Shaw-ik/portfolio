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
    <section
      id="home"
      className="relative w-full overflow-hidden bg-stone-800 flex flex-col items-center justify-center rounded-lg h-screen"
    >
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

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 w-full h-full bg-stone-800 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 items-center justify-center h-full z-30 pointer-events-none">
        <div className="hero-content pointer-events-none text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="pointer-events-auto text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Katsuya Iuchi
          </h1>
          
          <div className="flex items-center justify-center lg:justify-start gap-3 pointer-events-auto">
            <div className="flex items-center gap-1.5 tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-pink-400">
                <span className="absolute inset-0 rounded-full bg-pink-500 animate-ping"></span>
              </span>
              Full-stack developer
            </div>
          </div>

          {/* About Me Section */}
          <div className="relative pointer-events-auto mt-6 max-w-[720px]">
            {/* Glow Effect Background */}
            <div className="hidden md:block absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-xl blur-md opacity-70 z-0"></div>            
            
            {/* Main Content */}
            <div className="relative bg-stone-900/80 backdrop-blur-sm p-6 rounded-xl z-10">
              {/* Title with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-900/50 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path d="M10 8a1 1 0 011 1v2a1 1 0 11-2 0V9a1 1 0 011-1z" />
                    <path d="M9 5a1 1 0 112 0 1 1 0 01-2 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-indigo-400">About Me</h2>
              </div>
              
              {/* Main description */}
              <p className="text-stone-200 mb-6 text-sm md:text-base leading-relaxed">
                Hi! I'm Katsuya—call me Shaw. I'm a passionate Full Stack Developer with expertise in web, mobile, and AI technologies. I enjoy solving complex challenges with creative code and teamwork, and I look forward to connecting with you soon!
              </p>
              
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Developer card */}
                <div className="bg-stone-800/80 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white">Developer</h3>
                  </div>
                  <p className="text-xs text-stone-400">
                    Full-stack development with modern technologies
                  </p>
                </div>
                
                {/* Learner card */}
                <div className="bg-stone-800/80 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white">Learner</h3>
                  </div>
                  <p className="text-xs text-stone-400">
                    Continuously exploring new technologies
                  </p>
                </div>
                
                {/* Problem Solver card */}
                <div className="bg-stone-800/80 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white">Problem Solver</h3>
                  </div>
                  <p className="text-xs text-stone-400">
                    Turning ideas into reality with code
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add pointer-events-auto to your buttons when you uncomment them */}
        </div>
        
        <div className="hero-icon hidden sm:hidden md:hidden lg:flex justify-center items-center relative w-[480px] h-[480px] mx-auto pointer-events-auto">
          {/* Container for animated borders - keep outside the image container */}
          <div className="absolute inset-0 w-full h-full">
            {/* rotating border */}
              <div className="absolute inset-0 w-full h-full rounded-full border-5 border-dashed border-stone-400 animate-[spin_15s_linear_infinite]"></div>
          </div>
          
          {/* Fixed-size image container to ensure perfect circle */}
          <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-stone-700 shadow-lg">
            {/* Use aspect-square to force perfect square dimensions */}
            <div className="w-full h-full aspect-square">
              <img
                src="./hero-icon.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Home;
