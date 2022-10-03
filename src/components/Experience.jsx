import React from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';
import Project from './Project';

const projects = [
  {
    name: "Imagine",
    img_src: "",
    description: "A trip management/planning app for your magical Disney adventures.",
    tech: "React, React Hooks, MongoDB, Node.js, Express, HTML5, Sass",
    demo: "",
    github: "https://github.com/krisette/imagine"
  },
  {
    name: "Welcome Home, Friend",
    img_src: "",
    description: "A social media app to help owners find their furry friend once again.",
    tech: "React, React Hooks, React Context, PostgresQL, Node.js, Express, HTML5, MaterialUI",
    demo: "",
    github: "https://github.com/StarNosedMoleWCRI53/welcome-home-friend"
  }
];

export default function AboutMe() {
  return (
    <AnimateSharedLayout>
      <div className="flex flex-1 h-screen max-h-fit flex-col">
        <div className="mt-40 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: -100 }} transition={{ duration: 2 }} className="grid gap-4 grid-cols-3 items-center justify-center w-full z-2 w-3/4 gap-4">
            {projects.map((el, i) => <Project key={i} project={el} />)}
          </motion.div>
        </div>
      </div>
  </AnimateSharedLayout>
  )
}