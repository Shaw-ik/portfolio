import React, { useMemo } from 'react';

// Technology tag component
const TechTag = React.memo(({ tech, isLast }) => (
  <span className="tech-tag text-teal-400 text-sm">
    {tech}
    {!isLast && " |"}
  </span>
));

// Project description card component
const ProjectDescription = React.memo(({ description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
    <p className="text-gray-300">{description}</p>
  </div>
));

// Project image component with improved error handling and larger size
const ProjectImage = React.memo(({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 relative">
      <div className="phone-mockup relative mx-auto w-full">
        <img 
          src={project.imageUrl} 
          alt={`${project.name} screenshot`} 
          className="phone-screen rounded-xl shadow-lg w-full max-w-md mx-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
});

// Project card component
const ProjectCard = React.memo(({ project, isEven }) => {
  const flexDirection = isEven ? 'flex-row' : 'flex-row-reverse';
  
  return (
    <div className={`project-card ${flexDirection} flex flex-col lg:flex-row gap-8`}>
      <div className="project-image w-full lg:w-1/2">
        <ProjectImage project={project} />
      </div>
      
      <div className="project-info w-full lg:w-1/2 flex flex-col justify-center">
        <div className="featured-tag mb-2">
          <span className="text-teal-400 text-sm font-medium">Featured Project</span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-teal-400 mb-4">{project.name}</h3>
        <div className="category mb-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">{project.category}</span>
        </div>
        <ProjectDescription description={project.description} />
        <div className="tech-stack">
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.technologies.map((tech, techIndex) => (
              <TechTag 
                key={techIndex} 
                tech={tech} 
                isLast={techIndex === project.technologies.length - 1} 
              />
            ))}
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
      name: "X-Dividend Mobile App",
      description: "The app offers comprehensive data on companies, including categories of Most Actives, Gainers and Losers Stock Market. Users can sort the information by sector, name, highest or lowest price, dividend date, and ex-dividend date. This data is updated in real-time, ensuring that users always have access to the most current information.",
      technologies: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
      imageUrl: "/public/sample-project.png",
      category: "Stock Market Calendar and Investments"
    },
    {
      id: 2,
      name: "Interact Family Chat App",
      description: "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners. The app uses geolocation features to show other families within a specific radius, making it easy to find and connect with like-minded families nearby.",
      technologies: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
      imageUrl: "/public/sample-project.png",
      category: "Family Chatting and Events App"
    },
  ], []);

  return (
    <section id="projects" className="projects-section py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
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