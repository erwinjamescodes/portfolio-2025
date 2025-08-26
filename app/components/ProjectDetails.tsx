import React from "react";
import { Project } from "../lib/projects";

interface ProjectDetailsProps {
  project: Project;
  isExpanded: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  isExpanded,
}) => {
  if (!isExpanded || !project.content) {
    return null;
  }

  return (
    <div className=" space-y-8 py-8 mb-16">
      <div>
        <p className="text-xl leading-relaxed mb-8">
          {project.content.overview}
        </p>
      </div>

      <div>
        <h3 className="text-primary text-xl font-archivo-black mb-4 uppercase">
          Problem
        </h3>
        <p className="text-lg leading-relaxed">{project.content.problem}</p>
      </div>

      <div>
        <h3 className="text-primary text-xl font-archivo-black mb-4 uppercase">
          Solution
        </h3>
        <p className="text-lg leading-relaxed">{project.content.solution}</p>
      </div>

      <div>
        <h3 className="text-primary text-xl font-archivo-black mb-4 uppercase">
          Results
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {project.content.results.map((result, index) => (
            <div key={index} className="bg-primary p-4 text-light">
              <p className="font-archivo-black text-sm">{result}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-primary text-xl font-archivo-black mb-4 uppercase">
          Reflection
        </h3>
        <p className="text-lg leading-relaxed">{project.content.reflection}</p>
      </div>

      {project.content.links && (
        <div className="flex gap-4 pt-6 border-t border-gray-300">
          {project.content.links.demo && (
            <a
              href={project.content.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-light px-4 py-2 font-archivo-black text-sm uppercase hover:bg-opacity-90 transition-all"
            >
              Live Demo
            </a>
          )}
          {project.content.links.github && (
            <a
              href={project.content.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 font-archivo-black text-sm uppercase hover:bg-primary hover:text-light transition-all"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
