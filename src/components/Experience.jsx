import React, { useState, useMemo, useCallback } from 'react';
import { FaCalendarAlt, FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Technology tag component
const TechTag = React.memo(({ tech }) => (
  <span 
    className="px-3 py-1 text-sm bg-gray-700 rounded-full text-blue-300"
  >
    {tech}
  </span>
));

// Responsibility item component
const ResponsibilityItem = React.memo(({ text }) => (
  <li className="flex items-start">
    <span className="text-blue-400 mr-2 mt-1">•</span>
    <span>{text}</span>
  </li>
));

// Experience card component
const ExperienceCard = React.memo(({ job, isExpanded, onToggle }) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500"></div>

      {/* Content card */}
      <div className="ml-12 md:ml-16 bg-gray-800 rounded-lg overflow-hidden transition-all duration-300">
        {/* Header - always visible */}
        <div 
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={onToggle}
          aria-expanded={isExpanded}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        >
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-blue-300">
              <FaCalendarAlt aria-hidden="true" />
              <span>{job.period}</span>
            </div>
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaBuilding aria-hidden="true" />
              <span>{job.company}</span>
            </div>
          </div>
          <div className="text-blue-400">
            {isExpanded ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
          </div>
        </div>

        {/* Expandable content */}
        {isExpanded && (
          <div className="px-6 pb-6">
            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.technologies.map((tech) => (
                <TechTag key={tech} tech={tech} />
              ))}
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, index) => (
                <ResponsibilityItem key={index} text={responsibility} />
              ))}
            </ul>
          </div>
        )}
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
      ]
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
      ]
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
      ]
    }
  ], []);

  // Memoize toggle handler
  const toggleJob = useCallback((jobId) => {
    setExpandedJob(prevExpanded => prevExpanded === jobId ? null : jobId);
  }, []);

  return (
    <section id="experience" className="w-full min-h-screen bg-gray-900 text-white px-4 py-16 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Professional Experience
        </h1>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          A journey through my professional experiences, where each role has contributed to my growth as a developer.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((job) => (
              <ExperienceCard 
                key={job.id} 
                job={job} 
                isExpanded={expandedJob === job.id}
                onToggle={() => toggleJob(job.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;