import React, { useState, useMemo, useCallback } from 'react';
import { FaCalendarAlt, FaBuilding, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa';

// Technology tag component
const TechTag = React.memo(({ tech }) => (
  <span 
    className="px-3 py-1 text-sm bg-gradient-to-r from-violet-600/40 to-indigo-600/40 backdrop-blur-sm rounded-full text-cyan-400 border border-indigo-800/30"
  >
    {tech}
  </span>
));

// Responsibility item component
const ResponsibilityItem = React.memo(({ text }) => (
  <li className="flex items-start mb-2">
    <span className="text-cyan-400 mr-2 mt-1">•</span>
    <span>{text}</span>
  </li>
));

// Experience card component
const ExperienceCard = React.memo(({ job, isExpanded, onToggle }) => {
  return (
    <div className="relative mb-12 md:mb-16">
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-8 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-800"></div>
      
      {/* Timeline connector */}
      {!isExpanded && <div className="absolute left-4 md:left-8 -translate-x-1/2 top-8 md:top-10 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 to-indigo-800/30 opacity-70" />}
      
      <div className="ml-10 md:ml-16 bg-gradient-to-br from-slate-800/90 to-indigo-950/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg border border-slate-700/50">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {job.technologies.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
          
          <div className="flex flex-col space-y-1 mb-4">
            <div className="flex items-center space-x-2 text-sky-200">
              <FaCalendarAlt aria-hidden="true" className="text-sm" />
              <span className="text-sm">{job.period}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400">{job.title}</h3>
            <div className="flex items-center space-x-2 text-sky-200">
              <FaBuilding aria-hidden="true" className="text-sm" />
              <span className="text-sm">{job.company}</span>
            </div>
            
            <div className="text-cyan-400 mt-2 sm:mt-0">
              <div className="flex items-center">
                <FaMapMarkerAlt aria-hidden="true" className="mr-1 text-sm" />
                <span className="text-sm">{job.location}</span>
              </div>
            </div>
          </div>
          
          <ul className="space-y-2 text-sm md:text-base text-sky-100">
            {job.responsibilities.map((responsibility, index) => (
              <ResponsibilityItem key={index} text={responsibility} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState('job1');

  // Memoize experiences data
  const experiences = useMemo(() => [
    {
      id: 'job1',
      title: 'Full Stack Developer',
      company: 'Realtris',
      period: 'Dec 2024 - Present',
      technologies: ['Vite', 'Next.js', 'Nuxt.js', 'React Native', 'Laravel', 'Node.js', 'MongoDB', 'API Integration'],
      responsibilities: [
        'Led development of mortgage-focused web platforms using MERN stack.',
        'Integrated APIs for advanced financial data retrieval and analytics.',
        'Architected scalable back-end systems for high-traffic demands.'
      ],
      location: 'Remote'
    },
    {
      id: 'job2',
      title: 'Frontend Developer',
      company: 'TechSolutions Inc.',
      period: 'Jul 2023 - Nov 2024',
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'GraphQL', 'Jest'],
      responsibilities: [
        'Developed responsive user interfaces for enterprise applications.',
        'Implemented state management solutions using Redux and Context API.',
        'Collaborated with design team to create pixel-perfect UI components.'
      ],
      location: 'Remote'
    },
    {
      id: 'job3',
      title: 'Web Developer Intern',
      company: 'InnoTech Solutions',
      period: 'Jan 2023 - Jun 2023',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
      responsibilities: [
        'Assisted in developing and maintaining client websites.',
        'Created responsive landing pages for marketing campaigns.',
        'Collaborated with senior developers to implement new features.'
      ],
      location: 'Remote'
    }
  ], []);

  // Memoize toggle handler
  const toggleJob = useCallback((jobId) => {
    setExpandedJob(prevExpanded => prevExpanded === jobId ? null : jobId);
  }, []);

  return (
    <section id="experience" className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-white px-4 py-16 md:p-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 text-transparent bg-clip-text">
          Work Experience
        </h1>
        <p className="text-center text-sky-200 mb-12 md:mb-16 max-w-3xl mx-auto text-sm md:text-base">
          My professional journey through various roles and technologies
        </p>
        
        <div className="relative timeline mt-20">
          {/* Timeline track */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-indigo-700/30"></div>
          
          {/* Experience cards */}
          {experiences.map((job, index) => (
            <ExperienceCard 
              key={job.id} 
              job={job} 
              isExpanded={expandedJob === job.id}
              onToggle={() => toggleJob(job.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;