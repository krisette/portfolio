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
          <div className="flex text-2xl font-bold uppercase text-accent-lightest pb-3 items-center justify-center">
            About Me
          </div>

          <div className="py-3">
            I&#39;m Krisette. I specialize in front-end development, using
            TypeScript & JavaScript to create clean and user-friendly
            interfaces. While my heart lies at the front, I&#39;m no stranger to
            the back-end with hands-on experience in Node/Express and SQL/NoSQL
            databases. Growing up in the early days of the internet, I was the
            kid crafting &#34;pet pages&#34; for my Neopets, diving headfirst
            into HTML & CSS. This passion only deepened as I transitioned to
            personal blogging in high school (RIP, mocha-latte.org). And
            although a chapter of my life saw me in the role of a Registered
            Nurse, my intrinsic draw to tech led me back to the world of coding.
          </div>
          <div className="relative inline-block mt-6">
            <span className="absolute inset-x-0 bottom-0 h-[4px] bg-primary block transform -translate-y-[2px] z-0"></span>
            <span className="relative text-xl font-bold z-10 uppercase">
              🖥️ Current Quest
            </span>
          </div>
          <div>
            Diving deep into front end development at{" "}
            <a
              href="https://www.fusionmarketplace.com"
              className="hover-underline-animation font-semibold"
            >
              Fusion Marketplace
            </a>
            , a health care staffing recruitment platform, and extending the
            traveler experience with our iOS and Android app
          </div>
          <div className="relative inline-block mt-6">
            <span className="absolute inset-x-0 bottom-0 h-[4px] bg-primary block transform -translate-y-[2px] z-0"></span>
            <span className="relative text-xl font-bold z-10 uppercase">
              🎮 WHEN I&#39;M NOT CODING...
            </span>
          </div>
          <div>
            Catch me playing video games like Baldur&#39;s Gate 3 and Stardew
            Valley, watching anime/TV/movies, traveling, eating, visiting Disney
            parks all over the world (currently 4/6)
          </div>

          <div className="relative inline-block mt-6">
            <span className="absolute inset-x-0 bottom-0 h-[4px] bg-primary block transform -translate-y-[2px] z-0"></span>
            <span className="relative text-xl font-bold z-10 uppercase">
              📝 SKILLS
            </span>
          </div>
          <p className="text-white mb-5">
            Here are some of the technologies I’ve been working with recently:
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, index) => (
                <SkillPill key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
