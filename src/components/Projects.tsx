import React, { useEffect, useState } from 'react';
import projectData from '../data/projects.json';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <p className="text-sm text-gray-600">
              Technologies: {project.technologies.join(", ")}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
