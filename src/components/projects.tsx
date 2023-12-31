import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className="group bg-indigo-50 max-w-[42rem] border rounded-md border-black/20 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-indigo-100 transition">
      <div className="pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] max-w-[40%] ms:max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        alt="Project I worked on"
        src={imageUrl}
        quality={90}
        width={200}
        height={200}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2x1 
        group-hover:scale-105
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2

        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40 transition"
      />
    </section>
  );
};
