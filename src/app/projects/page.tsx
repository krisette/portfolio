"use client";
import React, { useEffect, useRef } from "react";
import { ProjectCard } from "../components/project-card";

export default function Projects() {
  const projects = [
    {
      name: "Fusion Marketplace",
      imageSrc: "/images/FusionMarketplace.png",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Redux Saga",
        "Material-UI",
        "styled-components",
        "Storybook",
      ],
      liveLink: "https://fusionmarketplace.com",
      description:
        "A platform empowering healthcare travelers to choose from thousands of jobs",
    },
    {
      name: "Fusion Marketplace Mobile",
      imageSrc: "/images/FusionMarketplaceMobile.gif",
      techStack: [
        "TypeScript",
        "React Native",
        "Tanstack Query",
        "TailwindCSS (NativeWind)",
        "Jotai",
        "Storybook",
      ],
      liveLink: "https://apps.apple.com/us/app/fusion-marketplace/id1614957866",
      description: "The mobile app for Fusion Marketplace",
    },
    {
      name: "ghost",
      imageSrc: "/images/Ghost.gif",
      techStack: [
        "TypeScript",
        "React",
        "TailwindCSS",
        "Material-UI",
        "Chart.js",
        "Node.js",
        "Express",
        "Electron",
        "AWS-SDK",
        "AWS Lambda",
      ],
      liveLink: "https://github.com/oslabs-beta/ghost",
      description: "AWS Lambda metrics monitoring tool, accelerated by OSLabs",
    },
    {
      name: "ghost (Website)",
      imageSrc: "/images/GhostWebsite.gif",
      techStack: [
        "TypeScript",
        "React",
        "React Router",
        "TailwindCSS",
        "TailwindUI",
      ],
      liveLink: "https://ghost-metrics.io",
      description: "Static website for ghost",
    },
  ];

  useEffect(() => {
    // Load Masonry.js and initialize it on the client side
    const Masonry = require("masonry-layout");

    const grid = document.querySelector(".project-card");
    if (grid) {
      const masonry = new Masonry(grid, {
        itemSelector: ".project-card",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });
    }
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:px-16 px-4 py-6">
        <div className="w-full max-w-5xl">
          <div className="text-2xl font-bold uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <ProjectCard key={index} {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
