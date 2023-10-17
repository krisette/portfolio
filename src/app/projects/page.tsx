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
      name: "FMP Mobile",
      imageSrc: "/images/FusionMarketplaceMobile.gif",
      techStack: [
        "TypeScript",
        "React Native",
        "Tanstack Query",
        "TailwindCSS (NativeWind)",
        "Jotai",
        "React Hook Form",
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
    {
      name: "Imagine",
      imageSrc: "/images/Imagine.png",
      techStack: [
        "React",
        "Sass",
        "Node/Express",
        "MongoDB",
        "Redux",
        "GraphQL",
      ],
      liveLink: "https://github.com/krisette/imagine/tree/v2",
      description:
        "A trip management/planning app for your magical Disney adventures",
    },
    {
      name: "whatsnext",
      imageSrc: "/images/whatsnext.png",
      techStack: [
        "React",
        "Next.js",
        "PostgreSQL",
        "Node.js",
        "Express",
        "TailwindCSS",
      ],
      liveLink: "https://github.com/InnoLVKB/whatsnext",
      description:
        "A calendar app that allows users to write down their thoughts, track their mood, and set goals from day to day",
    },
  ];
  const masonryRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Masonry = require("masonry-layout");
      const imagesLoaded = require("imagesloaded");

      if (masonryRef.current) {
        imagesLoaded(masonryRef.current, function () {
          new Masonry(masonryRef.current, {
            itemSelector: ".project-card",
            percentPosition: true,
            gutter: 20,
          });
        });
      }
    }
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:px-16 px-4 py-6">
        <div className="w-full max-w-5xl">
          <div className="flex text-2xl font-bold uppercase text-accent-lightest pb-3 items-center justify-center">
            Projects
          </div>
          <div ref={masonryRef} className="masonry-container">
            <div className="grid-sizer"></div>
            {projects.map((project, index) => (
              <div key={index} className="project-card transition mb-4">
                <ProjectCard key={index} {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
