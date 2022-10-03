import React from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';

export default function AboutMe() {
  return (
    <AnimateSharedLayout>
      <div className="flex flex-1 h-screen max-h-fit flex-col">
        <div className="mt-40 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center w-full font-dmSans z-2 w-3/4">
          <p className="text-white mb-5">Hi! I'm Krisette Odegard and I'm based in Los Angeles, CA. When I was a kid on the Internet, I liked making "pet pages" for my Neopets. Over time, this evolved to deploying personal blogs in high school with their own domain. In 2016, I graduated from nursing school and began a career in health care as a Registered Nurse. Life has a funny way of changing things up, and I decided to revisit my childhood passion. Now I'm a full-stack software engineer that specializes in JavaScript/React/Node.</p>
          <p className="text-white mb-5">In my spare time, I like playing video games, watching anime/TV/movies, and trying new restaurants. I also love Disney theme parks; it's my goal to go to every single Disney park in the world. (If you're wondering, I'm currently 3/7: I've been to Disneyland, Disney World, and Tokyo Disney so far.)</p>
          <p className="text-white mb-5">Here are some of the technologies I’ve been working with recently:</p>
          <ul>
            <li className="text-white">Node.js</li>
            <li className="text-white">Express</li>
            <li className="text-white">JavaScript (ES6+)</li>
            <li className="text-white">React / React Hooks</li>
            <li className="text-white">MongoDB</li>
            <li className="text-white">PostgreSQL</li>
            <li className="text-white">TailwindCSS</li>
          </ul>
          </motion.div>
        </div>
      </div>
  </AnimateSharedLayout>
  )
}