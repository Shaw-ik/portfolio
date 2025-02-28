import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-stone-900 text-stone-300 py-6 mt-24 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 right-6 bg-stone-800 hover:bg-stone-700 text-stone-300 p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 md:h-10 md:w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
        <p className="text-sm mb-4">
          &copy; {currentYear} Katsuya Iuchi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;