"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const skillBox1Ref = useRef(null);
  const skillBox2Ref = useRef(null);

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

      gsap.fromTo(
        gridRef.current,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
          },
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={skillsRef} className="w-full bg-light py-16 mt-16">
      <h2
        ref={titleRef}
        className="text-primary text-4xl font-archivo-black mb-16"
      >
        My expertise
      </h2>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 border-3 border-primary"
      >
        <div
          ref={skillBox1Ref}
          className="p-12 border-r-0 md:border-r-3 border-primary pb-32"
        >
          <h3 className="text-primary text-3xl font-archivo-black mb-8">
            Software Development
          </h3>
          <p className="text-primary text-lg font-roboto leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus
            diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet
            consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros
            sagittis diam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div ref={skillBox2Ref} className="p-12">
          <h3 className="text-primary text-3xl font-archivo-black mb-8">
            AI Automation
          </h3>
          <p className="text-primary text-lg font-roboto leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus
            diam facilisi blandit eros sagittis diam. Enim sit ullamcorper
            tellus diam facilisi blandit eros sagittis diam. Enim sit
            ullamcorper tellus diam facilisi blandit eros sagittis diam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
