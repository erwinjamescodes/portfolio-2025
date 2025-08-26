"use client";
import React from "react";
import { projects } from "../lib/projects";
import ProjectOverview from "./ProjectOverview";

const Projects = () => {
  return (
    <section className="w-full mt-16">
      <div>
        <h2 className="text-primary text-4xl font-archivo-black mb-16">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectOverview project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
