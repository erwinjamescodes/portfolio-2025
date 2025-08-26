import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "../lib/projects";

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render if no project
  if (!project) {
    return null;
  }

  return (
    <div
      className={`project-details fixed top-0 right-0 h-screen w-screen bg-light z-[60] transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full text-primary overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-8 h-8 cursor-pointer z-[70]"
        >
          <Image
            src="/assets/close.png"
            alt="Close"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </button>

        {/* Content */}
        {project.content && (
          <div className="max-w-7xl mx-auto px-8 py-16 pt-24">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-light text-sm bg-primary font-archivo-black lowercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-primary text-3xl md:text-5xl font-archivo-black mb-6 uppercase">
                {project.title}
              </h1>
              <div className="w-full h-96 relative mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-12">
              <div>
                <p className="text-xl leading-relaxed">
                  {project.content.overview}
                </p>
              </div>

              <div>
                <h2 className="text-primary text-2xl font-archivo-black mb-6 uppercase">
                  Problem
                </h2>
                <p className="text-lg leading-relaxed">
                  {project.content.problem}
                </p>
              </div>

              <div>
                <h2 className="text-primary text-2xl font-archivo-black mb-6 uppercase">
                  Solution
                </h2>
                <p className="text-lg leading-relaxed">
                  {project.content.solution}
                </p>
              </div>

              <div>
                <h2 className="text-primary text-2xl font-archivo-black mb-6 uppercase">
                  Results
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.content.results.map((result, index) => (
                    <div key={index} className="bg-primary p-6 text-light">
                      <p className="font-archivo-black text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-primary text-2xl font-archivo-black mb-6 uppercase">
                  Reflection
                </h2>
                <p className="text-lg leading-relaxed">
                  {project.content.reflection}
                </p>
              </div>

              {/* Action Buttons */}
              {project.content.links && (
                <div className="flex gap-4 pt-8 border-t border-primary">
                  {project.content.links.demo && (
                    <a
                      href={project.content.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-light px-6 py-3 font-archivo-black uppercase hover:bg-opacity-90 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.content.links.github && (
                    <a
                      href={project.content.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary text-primary px-6 py-3 font-archivo-black uppercase hover:bg-primary hover:text-light transition-all"
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
