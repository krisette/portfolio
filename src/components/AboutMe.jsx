import React from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';

export default function AboutMe() {
  return (
    <AnimateSharedLayout>
      <div className="flex flex-1 h-screen max-h-fit flex-col">
        <div className="mt-40 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center w-full font-dmSans z-2">
          <p className="text-white">Hi! I'm Krisette Odegard and I'm based in Los Angeles, CA. When I was a kid on the Internet, I liked making "pet pages" for my Neopets. Over time, this evolved to deploying personal blogs in high school with their own domain. In 2016, I graduated from nursing school and began a career in health care as a Registered Nurse. Life has a funny way of changing things up, and I decided to revisit my childhood passion. Now I'm a full-stack software engineer that specializes in _.</p>
          <p className="text-white">In my spare time, I like playing video games, watching anime/TV/movies, and trying new restaurants. I also love Disney theme parks; it's my goal to go to every single Disney park in the world. (If you're wondering, I'm currently 3/7: I've been to Disneyland, Disney World, and Tokyo Disney so far.)</p>
          <p className="text-white">Here are some of the technologies I’ve been working with recently:</p>
          <p className="text-white">Node.js Express JavaScript (ES6+) React MongoDB PostgreSQL TailwindCSS </p>
          </motion.div>
        </div>
      </div>
  </AnimateSharedLayout>
  )
}