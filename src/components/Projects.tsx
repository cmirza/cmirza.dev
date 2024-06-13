import React, { useEffect, useState } from 'react';
import projectData from '../data/projects.json';
import { FaJsSquare, FaReact, FaPython, FaJava, FaGithub } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  javascript: <FaJsSquare className="text-green-500" />,
  react: <FaReact className="text-blue-500" />,
  python: <FaPython className="text-yellow-500" />,
  java: <FaJava className="text-red-500" />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="flex flex-col items-center space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow-md w-full max-w-lg">
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500">Technologies:</span>
              <div className="ml-2 flex space-x-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="flex items-center space-x-1">
                    {iconMap[tech.toLowerCase()]}
                  </span>
                ))}
              </div>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
              <FaGithub className="mr-1" /> GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
