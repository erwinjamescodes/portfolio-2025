"use client";
import React from "react";

const Skills = () => {
  const skillSections = [
    {
      title: "Full-Stack Development",
      description:
        "I specialize in building modern web applications using Next.js, React, TypeScript, Node.js, and Python with 4 years of production experience. As an AWS Certified Solutions Architect Associate, I am proficient in cloud technologies and database solutions like PostgreSQL and Supabase. I also enjoy creating responsive UIs with Tailwind CSS and Shadcn UI.",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Supabase",
        "AWS",
        "PostgreSQL",
        "FastAPI",
      ],
      className:
        "border-r-0 md:border-r-2 border-primary border-b-2 md:border-b-0",
    },
    {
      title: "AI Automation",
      description:
        "I leverage AI technologies to create intelligent automation solutions that streamline business processes. I am experienced in implementing n8n workflows and developing custom AI solutions with OpenAI APIs, while currently exploring GoHighLevel. I am passionate about building systems that enhance productivity and deliver measurable business impact.",
      skills: [
        "n8n",
        "GoHighLevel",
        "OpenAI",
        "Zapier",
        "Make.com",
        "Google Suite",
        "Claude AI",
        "Gemini API",
      ],
      className: "",
    },
  ];

  return (
    <section className="w-full bg-light py-8 sm:py-16 mt-8 sm:mt-16">
      <h2 className="text-primary text-2xl sm:text-4xl font-archivo-black mb-8 sm:mb-16">
        My expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className={`p-6 sm:p-12 flex flex-col justify-between ${section.className}`}
          >
            <div>
              <h3 className="text-primary text-xl sm:text-3xl font-archivo-black mb-4 sm:mb-8">
                {section.title}
              </h3>
              <p className="text-primary text-lg sm:text-xl font-roboto leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-12">
              {section.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="border border-primary text-primary px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
