import React from "react";
import Link from "next/link";
import { projects } from "../lib/projects";
import ProjectOverview from "../_sections/ProjectOverview";

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-8">
      <div className="max-w-7xl mx-auto py-16 pt-36">
        {/* Breadcrumbs */}
        <div className="mb-12 ">
          <nav className="flex items-center space-x-2 text-xs">
            <Link
              href="/"
              className="text-primary hover:underline uppercase font-archivo-black"
            >
              Home
            </Link>
            <span className="text-primary">&gt;</span>
            <span className="text-primary uppercase font-archivo-black">
              Projects
            </span>
          </nav>
        </div>

        <div className="mb-12">
          <h1 className="text-primary text-2xl md:text-4xl font-archivo-black mb-2">
            Projects
          </h1>
          <p className="text-xl text-primary">
            This is a collection of my recent personal work and experiments.
            Most of these, I am just trying to solve my own problems. Hope you
            enjoy browsing!
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
