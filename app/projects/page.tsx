"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { x: 300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-light text-dark">
      <div className="max-w-7xl mx-auto px-8 pt-[100px] py-16">
        <h1
          ref={titleRef}
          className="text-primary text-4xl font-archivo-black mb-16"
        >
          All Projects
        </h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
            >
              <div className="flex flex-col">
                <div className="w-full h-80 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1080}
                    height={160}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="flex flex-wrap gap-2 mb-4 absolute top-4 left-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-light text-sm bg-primary font-archivo-black lowercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg">{project.description}</p>
                  <div className="flex justify-between items-center py-2 mt-6 border-t-2 border-b-2">
                    <h3 className="font-archivo-black uppercase text-lg">
                      {project.title}
                    </h3>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-archivo-black text-sm cursor-pointer hover:text-primary transition-colors"
                    >
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}