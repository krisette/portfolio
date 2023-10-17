import React from "react";
import Image from "next/image";
import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  liveLink?: string;
}

export function ProjectCard({
  name,
  description,
  techStack,
  imageSrc,
  liveLink,
}: Props) {
  return (
    <div className="bg-[#333333] text-white rounded-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl text-accent-light font-bold">{name}</h3>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="relative overflow-hidden bg-transparent border-2 border-secondary text-white py-1 px-2 rounded-lg flex items-center group">
                <div className="z-10 flex items-center space-x-2 uppercase text-xs">
                  {liveLink.includes("github") ? (
                    <FaGithubAlt />
                  ) : (
                    <FaExternalLinkAlt />
                  )}
                </div>
                <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </a>
          )}
        </div>
        <p className="text-onBackground mb-4">{description}</p>
        <div className="flex flex-wrap items-center justify-center">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-primary text-white px-2 py-1 rounded-lg text-xs font-semibold mr-2 mb-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
