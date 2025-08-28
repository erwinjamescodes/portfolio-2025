"use client";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-primary mt-16 sm:mt-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start py-8 sm:py-16">
          <div className="flex-1 p-4 sm:p-8 pt-8 sm:pt-16">
            <p className="text-2xl sm:text-4xl md:text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-2 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-4">
              Hello there!
            </p>
            <p className="text-2xl sm:text-4xl md:text-5xl font-archivo-black uppercase bg-light text-primary inline-block px-2 sm:px-4 py-1 sm:py-2">
              I am Erwin James.
            </p>
          </div>

          <p className="text-light text-lg sm:text-xl font-roboto p-4 sm:p-8 flex-1">
            By day, I craft digital experiences as a Full Stack Developer and AI
            Automation enthusiast. With 4 years in the field across fintech,
            cloud consultancy, and AI-first development teams, I build solutions
            that actually solve real problems.
            <br />
            <br />
            When I'm not coding, you'll find me deep into anime series or
            laughing along to stand-up comedy podcasts—I believe balance keeps
            creativity flowing between work and play. My approach combines
            technical know-how with genuine curiosity, whether I'm building a
            serverless application or debating the best anime storylines. I
            value meaningful connections both in code architecture and in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
