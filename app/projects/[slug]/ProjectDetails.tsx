"use client";
import React from "react";
import Image from "next/image";
import { Project } from "../../lib/projects";

interface ProjectClientProps {
  project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {
  if (!project.content) {
    return (
      <div className="min-h-screen bg-light text-primary flex items-center justify-center pt-[100px]">
        <p className="text-xl">Project content not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light text-primary">
      <div className="max-w-7xl mx-auto px-8 py-16 pt-36 md:pt-48">
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
          <div className="w-full h-120 relative mb-8 hidden md:block">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-40 relative mb-8 block md:hidden">
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
            <p className="text-xl leading-relaxed">{project.content.problem}</p>
          </div>

          <div className="w-full h-240 relative mb-8 hidden md:block">
            <Image
              src="/assets/claudipedia-2.png"
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full h-80 relative mb-8 block md:hidden">
            <Image
              src="/assets/claudipedia-2.png"
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-primary text-2xl font-archivo-black mb-6 uppercase">
              Solution
            </h2>
            <p className="text-xl leading-relaxed">
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
            <p className="text-xl leading-relaxed">
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
    </div>
  );
}
