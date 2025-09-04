"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../lib/projects";
import GithubButton from "../../_components/github";

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
    <div className="bg-light text-primary px-6 md:px-8">
      <div className="max-w-7xl mx-auto  py-16 pt-36">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-xs">
            <Link
              href="/"
              className="text-primary hover:underline uppercase font-archivo-black"
            >
              Home
            </Link>
            <span className="text-primary">&gt;</span>
            <Link
              href="/projects"
              className="text-primary hover:underline uppercase font-archivo-black"
            >
              Projects
            </Link>
            <span className="text-primary">&gt;</span>
            <span className="text-primary uppercase font-archivo-black">
              {project.slug}
            </span>
          </nav>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-primary text-3xl md:text-5xl font-archivo-black mb-6 uppercase">
            {project.title}
          </h1>

          {project.imageGrid?.image1 && project.imageGrid?.image2 && (
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="md:w-1/2">
                <Image
                  src={project.imageGrid?.image1 || ""}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={project.imageGrid?.image2 || ""}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
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

          {project.n8nImage && (
            <div className="w-full mb-8">
              <Image
                src={project.n8nImage}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          )}

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

          <GithubButton link={project.github} />
        </div>
      </div>
    </div>
  );
}
