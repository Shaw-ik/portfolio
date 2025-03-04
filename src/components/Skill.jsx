import React, { useState, useMemo } from 'react';
import { MdLanguage } from 'react-icons/md';
import { BsCodeSlash, BsGearFill, BsTools } from 'react-icons/bs';

// Helper function to check if a skill is a language skill
const isLanguageSkill = (skill) => 'level' in skill;

// Brand colors for technologies
const brandColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  Java: "#007396",
  React: "#61DAFB",
  "Next.js": "#000000",
  "ASP.NET": "#512BD4",
  "Tailwind CSS": "#06B6D4",
  Docker: "#2496ED",
  Git: "#F05032",
  "CI/CD": "#2088FF",
  Kubernetes: "#326CE5",
  Terraform: "#7B42BC",
  // Default color for items without specific brand colors
  default: "#6B7280"
};

// Skill category component
const SkillCategory = ({ category, isSelected, onClick }) => (
  <div 
    className={`bg-gradient-to-br from-slate-800/90 to-indigo-950/30 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-800 hover:to-indigo-900 ${isSelected ? 'border-l-4 border-violet-500' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-xl text-violet-400">{category.icon}</span>
        <h3 className="font-semibold">{category.name}</h3>
      </div>
      <span className="text-sm text-sky-200">{category.count} skills</span>
    </div>
  </div>
);

// Technical skill item component
const TechSkillItem = ({ skill }) => (
  <div 
    key={skill.name}
    className="group relative flex flex-col items-center"
  >
    <div 
      className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110"
    >
      <img 
        src={skill.logo} 
        alt={`${skill.name} logo`} 
        className="h-16 w-16 object-contain"
      />
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap z-10">
      <span className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 px-2 py-1 rounded text-sm">{skill.name}</span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
      <div 
        className="h-2 rounded-full" 
        style={{ 
          width: `${skill.proficiency}%`,
          backgroundColor: brandColors[skill.name] || brandColors.default
        }}
      ></div>
    </div>
    <span className="text-sm text-sky-200 mt-1">{skill.proficiency}%</span>
  </div>
);

// Language skill item component
const LanguageSkillItem = ({ skill }) => (
  <div 
    key={skill.name}
    className="bg-gradient-to-br from-slate-800/80 to-indigo-950/30 rounded-lg p-4 transition-transform duration-300 hover:scale-105 border border-slate-700/50"
  >
    <div className="flex items-center gap-2 mb-2">
      <MdLanguage className="text-violet-400" />
      <h3 className="text-lg font-medium">{skill.name}</h3>
    </div>
    <p className="text-sm text-sky-200 mb-3">{skill.level}</p>
    <div className="w-full bg-slate-800 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-violet-600 to-indigo-500 h-2 rounded-full" 
        style={{ width: `${skill.proficiency}%` }}
      ></div>
    </div>
  </div>
);

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Define skill categories with proper icons
  const categories = useMemo(() => [
    {
      name: "Programming Languages",
      icon: <BsCodeSlash />,
      count: 6,
      skills: [
        { 
          name: "HTML", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
          proficiency: 95 
        },
        { 
          name: "CSS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
          proficiency: 90 
        },
        { 
          name: "JavaScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
          proficiency: 95 
        },
        { 
          name: "TypeScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
          proficiency: 85 
        },
        { 
          name: "Python", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
          proficiency: 80 
        },
        { 
          name: "Java", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
          proficiency: 75 
        }
      ]
    },
    {
      name: "Frameworks",
      icon: <BsGearFill />,
      count: 4,
      skills: [
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
          proficiency: 90 
        },
        { 
          name: "Next.js", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
          proficiency: 90 
        },
        { 
          name: "ASP.NET", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", 
          proficiency: 83 
        },
        { 
          name: "Tailwind CSS", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", 
          proficiency: 95 
        },
      ]
    },
    {
      name: "Tools & Technologies",
      icon: <BsTools />,
      count: 3,
      skills: [
        { 
          name: "Docker", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
          proficiency: 85 
        },
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
          proficiency: 90 
        },
        { 
          name: "CI/CD", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          proficiency: 85 
        }
      ]
    },
    {
      name: "Others",
      icon: <MdLanguage />,
      count: 3,
      skills: [
        { name: "Japanese", level: "Native", proficiency: 100 },
        { name: "English", level: "Upper Intermediate (B2-C1)", proficiency: 85 },
        { name: "Chinese", level: "Intermediate", proficiency: 70 }
      ]
    }
  ], []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  // Find the selected category
  const selectedCategoryData = useMemo(() => 
    selectedCategory ? categories.find(c => c.name === selectedCategory) : null
  , [selectedCategory, categories]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-indigo-950 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 text-transparent bg-clip-text">Technical Expertise</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Categories */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-6 text-sky-100">Skill Categories</h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <SkillCategory 
                  key={category.name}
                  category={category}
                  isSelected={category.name === selectedCategory}
                  onClick={() => handleCategoryClick(category.name)}
                />
              ))}
            </div>
          </div>
          
          {/* Right content - Skills */}
          <div className="md:w-2/3 bg-gradient-to-br from-slate-800/50 to-indigo-950/30 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm">
            {selectedCategory && selectedCategoryData ? (
              <>
                <h2 className="text-2xl font-semibold mb-8 text-sky-100">{selectedCategory}</h2>
                {selectedCategory === "Others" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCategoryData.skills.map((skill) => (
                      <LanguageSkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedCategoryData.skills.map((skill) => (
                      <TechSkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-sky-200">
                <p>Choose a skill category to explore</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;