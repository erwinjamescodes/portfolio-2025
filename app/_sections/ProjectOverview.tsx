import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../lib/projects";
import GithubButton from "../_components/github";

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
        <div className="mb-4">
          <h1 className="text-primary text-xl sm:text-3xl md:text-4xl font-archivo-black mb-4 sm:mb-6 uppercase">
            {project.title}
          </h1>
          <div className="w-full mb-8">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto border-2 border-primary"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <p className="text-lg sm:text-xl leading-relaxed">
              {project.content.overview}
            </p>
          </div>

          {/* Read More Button */}
          <div className="py-2 flex gap-2">
            <Link href={`/projects/${project.slug}`}>
              <button className="border-2 px-4 py-2 sm:p-2 border-primary text-primary font-archivo-black uppercase hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all origin-center cursor-pointer text-sm sm:text-base">
                Read Case Study
              </button>
            </Link>

            <GithubButton link={project.github} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
