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
    demo: "",
    github: "https://github.com/StarNosedMoleWCRI53/welcome-home-friend"
  },
  {
    name: "Ghost Website",
    img_src: GhostWebsite,
    description: "Static website for Ghost.",
    tech: "Typescript, React, React Router, TailwindCSS, TailwindUI",
    demo: "http://krisette.github.io/ghost-website",
    github: "https://github.com/krisette/ghost-website"
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
    github: "https://github.com/StarNosedMoleWCRI53/welcome-home-friend"
  },
  {
    name: "Meet Me at the Spot",
    img_src: "",
    description: "Iterated on an already existing codebase.",
    tech: "React, PostgresQL, Node.js, Express, HTML5, MaterialUI",
    demo: "",
    github: "https://github.com/pandawhale-viewfinder/view-finder"
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
            className="grid grid-cols-3 items-center z-2 w-3/4 gap-10 align-top">
              {projects.map((project) => (
                <div key={project.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg h-96">
                  <div className="flex-shrink-0">
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