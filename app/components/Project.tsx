"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectClientProps {
  project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-light text-dark max-w-7xl mx-auto"
    >
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-block mb-8 font-archivo-black text-sm uppercase hover:text-primary transition-colors"
        >
          ← Back to Home
        </Link>

        <div ref={heroRef} className="mb-16">
          <h1 className="text-primary text-5xl font-archivo-black mb-6 uppercase">
            {project.title}
          </h1>
          <div className="w-full h-96 relative mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale"
            />
            <div className="flex flex-wrap gap-2 absolute top-4 left-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-light text-sm bg-primary font-archivo-black lowercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl leading-relaxed">
            {project?.content?.overview}
          </p>
        </div>

        {project.content && (
          <div className="space-y-16">
            <div
              ref={(el) => {
                contentRefs.current[0] = el;
              }}
              className=""
            >
              <div>
                <h2 className="text-primary text-3xl font-archivo-black mb-6 uppercase">
                  Problem
                </h2>
                <p className="text-lg leading-relaxed">
                  {project.content.problem}
                </p>
              </div>
            </div>

            <div
              ref={(el) => {
                contentRefs.current[1] = el;
              }}
            >
              <h2 className="text-primary text-3xl font-archivo-black mb-6 uppercase">
                Solution
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                {project.content.solution}
              </p>
            </div>

            <div
              ref={(el) => {
                contentRefs.current[2] = el;
              }}
            >
              <h2 className="text-primary text-3xl font-archivo-black mb-6 uppercase">
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

            <div
              ref={(el) => {
                contentRefs.current[3] = el;
              }}
            >
              <h2 className="text-primary text-3xl font-archivo-black mb-6 uppercase">
                Reflection
              </h2>
              <p className="text-lg leading-relaxed">
                {project.content.reflection}
              </p>
            </div>

            {project.content.links && (
              <div
                ref={(el) => {
                  contentRefs.current[4] = el;
                }}
                className="flex gap-4 pt-8 border-t-2 border-primary"
              >
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
        )}
      </div>
    </div>
  );
}
