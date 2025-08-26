"use client";
import React from "react";

const Skills = () => {
  return (
    <section className="w-full bg-light py-8 sm:py-16 mt-8 sm:mt-16">
      <h2 className="text-primary text-2xl sm:text-4xl font-archivo-black mb-8 sm:mb-16">
        My expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary">
        <div className="p-6 sm:p-12 border-r-0 md:border-r-2 border-primary border-b-2 md:border-b-0 pb-6 sm:pb-32">
          <h3 className="text-primary text-xl sm:text-3xl font-archivo-black mb-4 sm:mb-8">
            Software Development
          </h3>
          <p className="text-primary text-lg sm:text-xl font-roboto leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus
            diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet
            consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros
            sagittis diam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="p-6 sm:p-12">
          <h3 className="text-primary text-xl sm:text-3xl font-archivo-black mb-4 sm:mb-8">
            AI Automation
          </h3>
          <p className="text-primary text-lg sm:text-xl font-roboto leading-relaxed max-w-md">
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
