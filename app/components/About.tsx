"use client";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-primary mt-16 sm:mt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start py-8 sm:py-16">
          <div className="flex-1 p-4 sm:p-8 pt-8 sm:pt-16">
            <p className="text-3xl sm:text-4xl md:text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-2 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-4">
              Hello there!
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-2 sm:px-4 py-1 sm:py-2">
              I am Erwin James.
            </p>
          </div>

          <p className="text-light text-lg sm:text-xl font-roboto p-4 sm:p-8 flex-1">
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
