import React, { useState, useMemo } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet, SiTailwindcss, SiTypescript, SiKubernetes, SiTerraform, SiGithubactions } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';

// Helper function to check if a skill is a language skill
const isLanguageSkill = (skill) => 'level' in skill;

// Skill category component
const SkillCategory = ({ category, isSelected, onClick }) => (
  <div 
    className="bg-gray-800 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700"
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xl text-blue-400">{category.icon}</span>
        <span className="font-medium">{category.name}</span>
      </div>
      <span className="text-sm text-gray-400">{category.count} skills</span>
    </div>
  </div>
);

// Technical skill item component
const TechSkillItem = ({ skill }) => (
  <div 
    key={skill.name}
    className="group relative flex flex-col items-center"
  >
    <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110 text-blue-400">
      {skill.icon}
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
      <span className="bg-gray-700 px-2 py-1 rounded text-sm">{skill.name}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
      <div 
        className="bg-blue-500 h-2 rounded-full" 
        style={{ width: `${skill.proficiency}%` }}
      ></div>
    </div>
    <span className="text-sm text-blue-400 mt-1">{skill.proficiency}%</span>
  </div>
);

// Language skill item component
const LanguageSkillItem = ({ skill }) => (
  <div 
    key={skill.name}
    className="bg-gray-700 rounded-lg p-4 transition-transform duration-300 hover:scale-105"
  >
    <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
    <p className="text-sm text-gray-300 mb-3">{skill.level}</p>
    <div className="w-full bg-gray-600 rounded-full h-2">
      <div 
        className="bg-blue-500 h-2 rounded-full" 
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
      icon: "🎯",
      count: 6,
      skills: [
        { name: "HTML", icon: <FaHtml5 />, proficiency: 95 },
        { name: "CSS", icon: <FaCss3Alt />, proficiency: 90 },
        { name: "JavaScript", icon: <FaJs />, proficiency: 85 },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 83 },
        { name: "Python", icon: <FaPython />, proficiency: 80 },
        { name: "Java", icon: <FaJava />, proficiency: 75 }
      ]
    },
    {
      name: "Frameworks",
      icon: "⭐",
      count: 6,
      skills: [
        { name: "React", icon: <FaReact />, proficiency: 90 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 85 },
        { name: "ASP.NET", icon: <SiDotnet />, proficiency: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 95 },
        { name: "Docker", icon: <FaDocker />, proficiency: 85 },
        { name: "Git", icon: <FaGitAlt />, proficiency: 90 }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: "❯",
      count: 5,
      skills: [
        { name: "Docker", icon: <FaDocker />, proficiency: 85 },
        { name: "Kubernetes", icon: <SiKubernetes />, proficiency: 80 },
        { name: "Terraform", icon: <SiTerraform />, proficiency: 80 },
        { name: "Git", icon: <FaGitAlt />, proficiency: 90 },
        { name: "CI/CD", icon: <SiGithubactions />, proficiency: 85 }
      ]
    },
    {
      name: "Others",
      icon: "🌍",
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
    <section id="skills" className="w-full min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-16 text-indigo-400">Technical Expertise</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar - Categories */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-6 text-blue-400">Skill Categories</h2>
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
        <div className="md:w-2/3 bg-gray-800 rounded-lg p-6">
          {selectedCategory && selectedCategoryData ? (
            <>
              <h2 className="text-2xl font-semibold mb-8">{selectedCategory}</h2>
              {selectedCategory === "Others" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategoryData.skills.map((skill) => (
                    <LanguageSkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {selectedCategoryData.skills.map((skill) => (
                    <TechSkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Choose a skill category to explore</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;