import React, { useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* Images */
import sampleProject from './assets/portfolioImg.png';
import facebookListing from './assets/preparing.jpg';

// Technology tag component
const TechTag = React.memo(({ tech, isLast }) => (
  <span className="tech-tag text-cyan-400 text-sm bg-gradient-to-r from-indigo-900/30 to-slate-800/30 px-3 py-1 rounded-full border border-indigo-800/30">
    {tech}
    {!isLast && " |"}
  </span>
));

// Project description card component
const ProjectDescription = React.memo(({ description }) => (
  <div className="bg-gradient-to-br from-slate-800/90 to-indigo-950/30 p-4 md:p-6 rounded-lg shadow-lg mb-4 border border-slate-700/50">
    <p className="text-sky-100 text-sm md:text-base">{description}</p>
  </div>
));

// Project image component with improved error handling and larger size
const ProjectImage = React.memo(({ project }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-indigo-950/30 rounded-lg p-4 md:p-6 relative shadow-lg h-full flex items-center justify-center border border-slate-700/50">
      <img 
        src={project.imageUrl} 
        alt={`${project.name} screenshot`} 
        className="rounded max-h-[300px] object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
});

// Project card component
const ProjectCard = React.memo(({ project, isEven }) => {
  return (
    <div className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Project Image - Order changes based on even/odd */}
        <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <ProjectImage project={project} />
        </div>
        
        {/* Project Details */}
        <div className={`flex flex-col ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="mb-4">
            <span className="text-cyan-400 text-xs md:text-sm font-medium">My Project</span>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 mb-2 md:mb-4">{project.name}</h3>
            
            <span className="text-xs text-sky-200 uppercase tracking-wider">{project.category}</span>
          </div>
          
          <ProjectDescription description={project.description} />
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <TechTag 
                key={index} 
                tech={tech} 
                isLast={index === project.technologies.length - 1} 
              />
            ))}
          </div>
          
          <div className="flex gap-4 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-100 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">View Code</span>
              </a>
            )}
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-100 hover:text-cyan-400 transition-colors"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Projects = () => {
  // Memoize projects data
  const projects = useMemo(() => [
    {
      id: 1,
      name: "Personal Portfolio Website (This Website)",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features a clean, professional design with smooth animations, dark theme, and sections for skills, projects, and contact information. The site showcases technical expertise through interactive components and optimized performance.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      imageUrl: sampleProject,
      category: "Web Development",
      github: "https://github.com/Shaw-ik/portfolio",
      demo: "https://shaw-ik-portfolio.vercel.app/"
    },
    {
      id: 2,
      name: "Facebook Auto Listing App",
      description: "An automated Facebook Marketplace listing application that streamlines the process of posting and managing product listings. Features include bulk listing creation, automated price updates, inventory management, and performance analytics. The app significantly reduces manual effort and improves marketplace selling efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      imageUrl: facebookListing,
      category: "E-commerce Automation",
      github: "",
      demo: ""
    },
  ], []);

  return (
    <section id="projects" className="projects-section py-12 md:py-16 bg-gradient-to-b from-indigo-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 text-transparent bg-clip-text">My Projects</h1>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;