'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const greeting1Ref = useRef(null);
  const greeting2Ref = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        }
      });

      tl.fromTo([greeting1Ref.current, greeting2Ref.current],
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      )
      .fromTo(descriptionRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="w-full bg-primary mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start py-16">
          <div className="flex-1 p-8 pt-16">
            <p ref={greeting1Ref} className="text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-4 py-2 mb-4">
              Hello there!
            </p>
            <p ref={greeting2Ref} className="text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-4 py-2">
              I am Erwin James.
            </p>
          </div>

          <p ref={descriptionRef} className="text-light text-lg font-roboto p-8 flex-1">
            I&apos;m a Full Stack Developer, AWS Solutions Architect, and AI
            Enthusiast with 4 years of production experience building web
            applications that solve real problems and drive measurable results.
            My journey spans from modernizing legacy systems to architecting
            cutting-edge multi-tenant SaaS platforms. I&apos;m AWS certified and
            specialize in cloud-native architectures, leveraging serverless
            technologies and AI automations to build scalable solutions that
            bridge technical excellence with business impact through intelligent
            automation and streamlined workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
