import React from 'react';
import { motion } from 'framer-motion'
import Project from './Project';
import WelcomeHomeFriend from '../assets/welcome_home_friend.png';

const projects = [
  {
    name: "Ghost",
    img_src: "",
    description: "An AWS Lambda metrics visualizer. Accelerated by OSLabs.",
    tech: "Typescript, React, TailwindCSS, HTML5, MaterialUI, Electron, AWS-SDK",
    demo: "",
    github: "https://github.com/StarNosedMoleWCRI53/welcome-home-friend"
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

export default function AboutMe() {
  return (
      <div className="flex flex-1 h-screen max-h-fit flex-col">
        <div className="mt-40 flex flex-col justify-center items-center">
          <motion.div
            layout
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 2 }}
            className="grid grid-cols-3 items-center justify-center z-2 w-3/4 gap-10">
              {projects.map((el, i) => <Project key={i} project={el} />)}
          </motion.div>
        </div>
      </div>
  )
}