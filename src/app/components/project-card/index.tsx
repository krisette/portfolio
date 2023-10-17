import React from "react";
import Image from "next/image";

export function ProjectCard({
  name,
  description,
  techStack,
  imageSrc,
  liveLink,
}) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-8">
      <div className="relative overflow-hidden">
        {imageSrc.endsWith(".gif") ? (
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={300}
            className="mx-auto my-4"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            className="object-cover"
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap -mx-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-400 text-gray-800 px-2 py-1 rounded-full text-sm font-semibold mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mt-4"
          >
            View Live
          </a>
        )}
      </div>
    </div>
  );
}
