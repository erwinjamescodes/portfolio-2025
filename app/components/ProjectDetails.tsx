import React, { useState } from "react";
import Image from "next/image";
import { Project } from "../lib/projects";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!project) {
    return null;
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-col h-full text-primary overflow-y-auto">
      {project.content && (
        <div className="max-w-7xl mx-auto ">
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
            <h1 className="text-primary text-3xl md:text-4xl font-archivo-black mb-6 uppercase">
              {project.title}
            </h1>
            <div className="w-full h-120 relative mb-8 hidden md:block">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-48 relative mb-8 block md:hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-6">
            <div>
              <p className="text-xl leading-relaxed">
                {project.content.overview}
              </p>
            </div>

            {/* Detailed sections that can be toggled */}
            {showDetails && (
              <>
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
                  <Image
                    src="/assets/claudipedia-1.png"
                    alt="Claudipedia"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
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
              </>
            )}

            {/* Toggle Button */}
            <div className="py-2">
              <button
                onClick={toggleDetails}
                className="border-2 p-2 border-primary text-primary font-archivo-black uppercase hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all origin-center cursor-pointer"
              >
                {showDetails ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
