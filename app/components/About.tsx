'use client';
import React from "react";

const About = () => {

  return (
    <div className="w-full bg-primary mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start py-16">
          <div className="flex-1 p-8 pt-16">
            <p className="text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-4 py-2 mb-4">
              Hello there!
            </p>
            <p className="text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-4 py-2">
              I am Erwin James.
            </p>
          </div>

          <p className="text-light text-lg font-roboto p-8 flex-1">
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
