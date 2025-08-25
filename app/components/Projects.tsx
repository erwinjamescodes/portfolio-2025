import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CLOUDPEDIA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam.",
      tags: ["nextjs", "n8n", "supabase"],
      viewMore: "VIEW MORE",
    },
    {
      id: 2,
      title: "CLOUDPEDIA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam.",
      tags: ["HTML", "CSS", "Javascript"],
      viewMore: "VIEW MORE",
    },
  ];

  return (
    <section className="w-full mt-16">
      <div>
        <h2 className="text-primary text-4xl font-archivo-black mb-16">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="flex flex-col">
                {/* Image */}
                <div className="w-full h-80 relative">
                  <Image
                    src="/assets/placeholder-project.jpeg"
                    alt={project.title}
                    width={1080}
                    height={160}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="flex flex-wrap gap-2 mb-4 absolute top-4 left-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-primary text-sm  bg-light font-archivo-black lowercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper
                    tellus diam facilisi blandit eros sagittis diam. Lorem ipsum
                    dolor sit amet consectetur. Enim sit ullamcorper tellus diam
                    facilisi blandit eros sagittis diam.
                  </p>
                  <div className="flex justify-between py-2 mt-6 border-t-2 border-b-2">
                    <h3 className="font-archivo-black uppercase text-lg">
                      Claudipedia
                    </h3>
                    <button className="font-archivo-black text-xs">
                      read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
