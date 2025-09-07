"use client";
import React from "react";

const Skills = () => {
  return (
    <section className="w-full bg-light py-8 sm:py-16 mt-8 sm:mt-16">
      <h2 className="text-primary text-2xl sm:text-4xl font-archivo-black mb-8 sm:mb-16">
        My expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary">
        <div className="p-6 sm:p-12 border-r-0 md:border-r-2 border-primary border-b-2 md:border-b-0 flex flex-col justify-between">
          <div>
            <h3 className="text-primary text-xl sm:text-3xl font-archivo-black mb-4 sm:mb-8">
              Full-Stack Development
            </h3>
            <p className="text-primary text-lg sm:text-xl font-roboto leading-relaxed ">
              I specialize in building modern web applications using Next.js,
              React, TypeScript, and Node.js with 4 years of production
              experience. As an AWS Certified Solutions Architect Associate, I
              am proficient in cloud technologies and database solutions like
              PostgreSQL and Supabase. I also enjoy creating responsive UIs with
              Tailwind CSS and Shadcn UI.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12">
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Next.js
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              React
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              TypeScript
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Node.js
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Python
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Supabase
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              AWS
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              PostgreSQL
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              FastAPI
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-primary text-xl sm:text-3xl font-archivo-black mb-4 sm:mb-8">
              AI Automation
            </h3>
            <p className="text-primary text-lg sm:text-xl font-roboto leading-relaxed ">
              I leverage AI technologies to create intelligent automation
              solutions that streamline business processes. I am experienced in
              implementing n8n workflows and developing custom AI solutions with
              OpenAI APIs, while currently exploring GoHighLevel. I am
              passionate about building systems that enhance productivity and
              deliver measurable business impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12">
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              n8n
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              GoHighLevel
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              OpenAI
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Zapier
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Make.com
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Google Suite
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Claude AI
            </span>
            <span className="border border-primary text-primary px-3 py-1 text-sm font-medium">
              Gemini API
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
