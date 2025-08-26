import React from "react";
import { projects } from "../lib/projects";
import ProjectOverview from "../components/ProjectOverview";

export default function ProjectsPage() {
  return (
    <div className="px-8 pt-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-primary text-4xl md:text-5xl font-archivo-black mb-6 uppercase">
            All Projects
          </h1>
          <p className="text-xl text-primary">
            A collection of my work and experiments
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectOverview project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
