import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Claudipedia",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam.",
      tags: ["nextjs", "n8n", "supabase"],
      image: "/assets/placeholder-project.jpeg",
    },
    {
      id: 2,
      title: "Automated Email Response",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam. Lorem ipsum dolor sit amet consectetur. Enim sit ullamcorper tellus diam facilisi blandit eros sagittis diam.",
      tags: ["HTML", "CSS", "Javascript"],
      image: "/assets/placeholder-project-2.jpg",
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
                    src={project.image}
                    alt={project.title}
                    width={1080}
                    height={160}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="flex flex-wrap gap-2 mb-4 absolute top-4 left-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-light text-sm  bg-primary font-archivo-black lowercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg">{project.description}</p>
                  <div className="flex justify-between py-2 mt-6 border-t-2 border-b-2">
                    <h3 className="font-archivo-black uppercase text-lg">
                      {project.title}
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
