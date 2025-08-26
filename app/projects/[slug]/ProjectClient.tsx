"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Project } from "../../lib/projects";
import ProjectNav from "../../components/ProjectNav";

interface ProjectClientProps {
  project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide in from right animation
      gsap.fromTo(
        containerRef.current,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Fade in content after slide animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project.content) {
    return (
      <div className="min-h-screen bg-light text-primary flex items-center justify-center">
        <p className="text-xl">Project content not found.</p>
      </div>
    );
  }

  return (
    <>
      <ProjectNav />
      <div
        ref={containerRef}
        className="min-h-screen bg-light text-primary"
      >
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-8 py-16 pt-24"
      >
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
      </div>
    </>
  );
}