import React, { useEffect, useState } from "react";
import projectData from "../data/projects.json";
import {
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb } from "react-icons/si";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string[];
}

const iconMap: { [key: string]: JSX.Element } = {
  javascript: <FaJsSquare className="text-yellow-500" title="JavaScript"/>,
  typescript: <SiTypescript className="text-blue-500" title="TypeScript"/>,
  nodejs: <FaNodeJs className="text-green-500" title="NodeJS"/>,
  react: <FaReact className="text-blue-500" title="React"/>,
  express: <SiExpress className="dark:text-white text-black" title="Express"/>,
  python: <FaPython className="text-green-500" title="Python"/>,
  java: <FaJava className="text-red-500" title="Java"/>,
  mongodb: <SiMongodb className="text-green-500" title="MongoDB"/>,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section className="p-1">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="flex flex-col items-center space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md w-full max-w-xl border border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex items-center mt-2 mb-2">
              <div className="flex space-x-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="flex items-center space-x-1">
                    {iconMap[tech.toLowerCase()]}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              {project.github.map((link, i) => (
                <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaGithub className="mr-1" /> {link.replace(/^https?:\/\//, "")}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
