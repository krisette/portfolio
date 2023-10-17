import React from "react";
import { SkillPill } from "../components/skills";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSqlite,
  SiMongodb,
  SiStorybook,
  SiAmazonaws,
  SiGraphql,
  SiJest,
  SiReactquery,
  SiMui,
  SiStyledcomponents,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function About() {
  const skills = [
    { name: "HTML5", Icon: FaHtml5 },
    { name: "CSS3", Icon: FaCss3Alt },
    { name: "Sass", Icon: FaSass },
    { name: "JavaScript ES6+", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: FaReact },
    { name: "React Native", Icon: TbBrandReactNative },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Redux", Icon: SiRedux },
    { name: "Tanstack Query", Icon: SiReactquery },
    { name: "Jotai", Icon: null },
    { name: "TailwindCSS", Icon: SiTailwindcss },
    { name: "Material-UI", Icon: SiMui },
    { name: "styled-components", Icon: SiStyledcomponents },
    { name: "Storybook", Icon: SiStorybook },
    { name: "Vite", Icon: SiVite },
    { name: "Webpack", Icon: SiWebpack },
    { name: "Node/Express", Icon: FaNodeJs },
    { name: "SQL databases", Icon: SiSqlite },
    { name: "NoSQL databases", Icon: SiMongodb },
    { name: "Git/Github", Icon: FaGithub },
    { name: "AWS", Icon: SiAmazonaws },
    { name: "GraphQL", Icon: SiGraphql },
    { name: "Jest", Icon: SiJest },
  ];

  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:px-16 px-4 py-6">
        <div className="w-full max-w-5xl">
          <div className="text-4xl font-bold uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </div>
        </div>
      </div>
    </main>
  );
}
