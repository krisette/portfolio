import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from "framer-motion";
import { Element } from 'react-scroll';
import WelcomeHomeFriend from '../assets/welcome_home_friend.png';
import GhostWebsite from '../assets/ghost_website.png';
import Ghost from '../assets/ghost.png';

const projects = [
  {
    name: "Ghost",
    img_src: Ghost,
    description: "An AWS Lambda metrics visualizer. Accelerated by OSLabs.",
    tech: "Typescript, React, TailwindCSS, HTML5, MaterialUI, Electron, AWS-SDK",
    demo: "https://github.com/oslabs-beta/ghost/releases/tag/v1.0.0",
    github: "https://github.com/oslabs-beta/ghost"
  },
  {
    name: "Ghost Website",
    img_src: GhostWebsite,
    description: "Static website for Ghost.",
    tech: "Typescript, React, React Router, TailwindCSS, TailwindUI",
    demo: "http://os-ghost.github.io/website",
    github: "https://github.com/os-ghost/website"
  },
  {
    name: "Imagine",
    img_src: "",
    description: "A trip management/planning app for your magical Disney adventures.",
    tech: "React, MongoDB, Node.js, Express, HTML5, Sass",
    demo: "",
    github: "https://github.com/krisette/imagine"
  },
  {
    name: "Welcome Home, Friend",
    img_src: WelcomeHomeFriend,
    description: "A social media app to help owners find their furry friend once again.",
    tech: "React, PostgresQL, Node.js, Express, HTML5, MaterialUI",
    demo: "",
    github: "https://github.com/WelcomeHomeFriend/welcome-home-friend"
  },
  {
    name: "Meet Me at the Spot",
    img_src: "",
    description: "A social media app to share your favorite locations.",
    tech: "React, PostgresQL, Node.js, Express, HTML5, MaterialUI",
    demo: "",
    github: "https://github.com/MeetmeattheSpot/Meet-me-at-the-Spot"
  },
];

export default function Experience() {
  const { scrollY } = useScroll()
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const y = useTransform(scrollY, [elementTop, elementTop + 1], [1, 0], {
    clamp: false
  });
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
      <Element name="experience">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y }}
            className="flex flex-col items-center align-center w-3/4">
              {projects.map((project) => (
                <div key={project.name} className="flex flex-row h-96 w-screen">
                  <div className="flex">
                    <img className="h-48 w-full object-cover" src={project.img_src} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col text-white p-6 h-24">
                        <p className="text-xl font-semibold">{project.name}</p>
                        <p className="mt-3 text-base text-gray-500">{project.description}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                    <p className="mt-3 text-base text-gray-500">{project.tech}</p>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          <a href={project.demo} className="hover:underline">
                            Demo
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <a href={project.github} className="hover:underline">
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
          </motion.div>
        </Element>
  );
}