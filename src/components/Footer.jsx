import React from "react";
import { FaArrowUp } from "react-icons/fa";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-indigo-950 text-sky-100 py-6 relative">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 right-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-cyan-500 hover:to-violet-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp 
            size={20} 
            className="animate-bounce" 
            stroke="currentColor"
          />
        </button>
        
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} Katsuya Iuchi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;