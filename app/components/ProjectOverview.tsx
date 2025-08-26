import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../lib/projects";

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  if (!project || !project.content) {
    return null;
  }

  return (
    <div className="flex flex-col h-full text-primary overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Project Header */}
        <div className="mb-4">
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

          {/* Read More Button */}
          <div className="py-2">
            <Link href={`/projects/${project.slug}`}>
              <button className="border-2 p-2 border-primary text-primary font-archivo-black uppercase hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all origin-center cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
