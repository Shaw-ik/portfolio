"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaHome, FaCode, FaBriefcase, FaFolder, FaEnvelope } from "react-icons/fa";

function Header({ className }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  
  // Reference to store tab elements and their positions
  const tabsRef = useRef(new Map());

  // Check if viewport is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const memoizedSetPosition = useCallback(
    (newPosition) => {
      setPosition(newPosition);
    },
    [setPosition]
  );

  const handleMouseLeave = useCallback(() => {
    if (!activeSection) {
      setPosition((pv) => ({ ...pv, opacity: 0 }));
      return;
    }
    
    // When mouse leaves, set position to active section
    const activeTabData = tabsRef.current.get(activeSection);
    if (activeTabData) {
      setPosition({
        width: activeTabData.width,
        opacity: 1,
        left: activeTabData.left,
      });
    } else {
      setPosition((pv) => ({ ...pv, opacity: 0 }));
    }
  }, [activeSection, setPosition]);

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const sections = ["home", "skills", "experience", "projects", "contact"];
    const sectionElements = sections.map(id => document.getElementById(id));
    
    // Function to handle active section based on scroll position
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Find the section that's currently most visible in the viewport
      let currentSection = null;
      let maxVisiblePercentage = 0;
      
      sectionElements.forEach((section) => {
        if (!section) return;
        
        const { top, bottom, height } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, top < 0 ? 0 : top);
        const visibleBottom = Math.min(windowHeight, bottom > windowHeight ? windowHeight : bottom);
        const visibleHeight = visibleBottom - visibleTop;
        
        // Calculate the percentage of the section that's visible
        const visiblePercentage = (visibleHeight / height) * 100;
        
        // Special case for the first section (home) to be active when at the top
        if (section.id === 'home' && scrollPosition < windowHeight / 2) {
          currentSection = 'home';
          maxVisiblePercentage = 100;
          return;
        }
        
        // Update active section if this one is more visible
        if (visiblePercentage > maxVisiblePercentage && visiblePercentage > 10) {
          maxVisiblePercentage = visiblePercentage;
          currentSection = section.id;
        }
      });
      
      // Update active section if we found one
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        // Update cursor position
        const activeTabData = tabsRef.current.get(currentSection);
        if (activeTabData) {
          setPosition({
            width: activeTabData.width,
            opacity: 1,
            left: activeTabData.left,
          });
        }
      }
    };
    
    // Run once on mount to set initial position
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, setPosition]);

  return (
    <ul
      className={cn("flex w-fit rounded-full border border-indigo-900 bg-gradient-to-r from-indigo-900/80 to-slate-800/80 backdrop-blur-sm p-1 z-50", className)}
      onMouseLeave={handleMouseLeave}
    >
      <Tab 
        setPosition={memoizedSetPosition} 
        sectionId="home" 
        isActive={activeSection === "home"}
        tabsRef={tabsRef}
        isMobile={isMobile}
        icon={<FaHome className="text-[18px]" />}
      >
        Home
      </Tab>
      <Tab 
        setPosition={memoizedSetPosition} 
        sectionId="skills" 
        isActive={activeSection === "skills"}
        tabsRef={tabsRef}
        isMobile={isMobile}
        icon={<FaCode className="text-[18px]" />}
      >
        Skills
      </Tab>
      <Tab 
        setPosition={memoizedSetPosition} 
        sectionId="experience" 
        isActive={activeSection === "experience"}
        tabsRef={tabsRef}
        isMobile={isMobile}
        icon={<FaBriefcase className="text-[18px]" />}
      >
        Experience
      </Tab>
      <Tab 
        setPosition={memoizedSetPosition} 
        sectionId="projects" 
        isActive={activeSection === "projects"}
        tabsRef={tabsRef}
        isMobile={isMobile}
        icon={<FaFolder className="text-[18px]" />}
      >
        Projects
      </Tab>
      <Tab 
        setPosition={memoizedSetPosition} 
        sectionId="contact" 
        isActive={activeSection === "contact"}
        tabsRef={tabsRef}
        isMobile={isMobile}
        icon={<FaEnvelope className="text-[18px]" />}
      >
        Contact
      </Tab>
      <Cursor position={position} />
    </ul>
  );
}

const Tab = React.memo(({ children, setPosition, sectionId, isActive, tabsRef, isMobile, icon }) => {
  const ref = useRef(null);

  // Store tab position data on mount and updates
  useEffect(() => {
    if (ref.current) {
      // Use getBoundingClientRect for more accurate positioning
      const rect = ref.current.getBoundingClientRect();
      const parentRect = ref.current.parentElement.getBoundingClientRect();
      
      // Calculate position relative to parent
      const left = rect.left - parentRect.left;
      
      // Store tab data with precise measurements
      tabsRef.current.set(sectionId, {
        width: rect.width,
        left: left
      });
      
      // Update position if this is the active tab
      if (isActive) {
        setPosition({
          width: rect.width,
          opacity: 1,
          left: left,
        });
      }
    }
    
    // Handle resizing to update positions
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.parentElement.getBoundingClientRect();
        const left = rect.left - parentRect.left;
        
        tabsRef.current.set(sectionId, {
          width: rect.width,
          left: left
        });
        
        if (isActive) {
          setPosition({
            width: rect.width,
            opacity: 1,
            left: left,
          });
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sectionId, isActive, setPosition, tabsRef, isMobile]);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const parentRect = ref.current.parentElement.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    
    setPosition({
      width: rect.width,
      opacity: 1,
      left: left,
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
      className={`relative flex justify-center items-center z-2 cursor-pointer ${
        isMobile 
        ? `px-3 py-2.5 ${isActive ? 'min-w-[55px]' : 'min-w-[55px]'}` 
        : 'px-2.5 py-1 md:px-4 md:py-2'
      } transition-all duration-300 text-xs uppercase md:text-sm ${isActive 
        ? 'text-cyan-400 font-medium' 
        : 'text-sky-100 mix-blend-difference'}`}
    >
      <div className="flex items-center justify-center gap-1.5">
        {isMobile && icon}
        <span className={`${isMobile && isActive ? 'text-[12px]' : ''}`}>
          {isMobile && !isActive ? '' : children}
        </span>
      </div>
    </li>
  );
});

const Cursor = React.memo(({ position }) => {
  const style = {
    left: position.left,
    width: position.width,
    opacity: position.opacity,
    transition: "left 0.3s ease, width 0.3s ease, opacity 0.3s ease",
  };

  return (
    <li
      style={style}
      className="absolute z-1 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 md:h-10"
    />
  );
});

export default Header;