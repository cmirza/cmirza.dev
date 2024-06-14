import React, { useEffect, useState } from "react";
import projectData from "../data/projects.json";
import {
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  javascript: <FaJsSquare className="text-yellow-500" />,
  react: <FaReact className="text-blue-500" />,
  python: <FaPython className="text-green-500" />,
  java: <FaJava className="text-red-500" />,
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
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub className="mr-1" />{" "}
              {project.github.replace(/^https?:\/\//, "")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
