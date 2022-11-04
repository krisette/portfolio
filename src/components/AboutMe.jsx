import React from 'react';
import { motion } from 'framer-motion'
// flex flex-1 h-screen max-h-fit flex-col sm:flex-row md:flex-row"
// flex flex-row  items-center justify-center w-full z-2 w-3/4 gap-4
// flex flex-col sm:flex-row items-center justify-center w-full w-96 z-2

export default function AboutMe() {
  return (
      <div className="flex flex-col h-screen">
        <div className="mt-40 flex justify-center items-center">
          <motion.div
            layout
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 2 }}
            className="flex flex-col">
              <div className="flex flex-col items-center justify-center text-black h-full bg-pink-100 ml-5 mr-5">
                picture here
              </div>
            <div className="flex flex-col items-center m-10">
              <p className="text-gray-50 mb-5 lowercase text-justify">Hello! I'm <span className="text-pink-100 font-bold">Krisette Odegard</span> and I'm based in Los Angeles, California. When I was a kid on the Internet, I loved making "pet pages" for my Neopets, so I taught myself HTML & CSS. Over time, this evolved to deploying personal blogs in high school with their own domain. In 2016, I graduated from nursing school and began a career in health care as a <span className="text-pink-100 font-bold">Registered Nurse</span>. Life has a funny way of changing things up, and I decided to revisit my childhood passion. Now I'm a <span className="text-pink-100 font-bold">full-stack software engineer</span> that specializes in <span className="text-pink-100 font-bold">JavaScript</span>/<span className="text-pink-100 font-bold">React</span>/<span className="text-pink-100 font-bold">Node</span>.</p>
              <p className="text-gray-50 mb-5 lowercase text-justify">In my spare time, I like playing video games, watching anime/TV/movies, and trying new restaurants. I also love Disney theme parks; it's my goal to go to every single Disney park in the world. (If you're wondering, I'm currently 3/7: I've been to Disneyland, Disney World, and Tokyo Disney so far.)</p>
              <p className="text-white mb-5 lowercase text-justify">Here are some of the technologies I’ve been working with recently:</p>
              <ul className="text-gray-50 lowercase">
                <li>✨ Node.js</li>
                <li>✨ Express</li>
                <li>✨ JavaScript (ES6+)</li>
                <li>✨ TypeScript</li>
                <li>✨ React / React Hooks</li>
                <li>✨ MongoDB</li>
                <li>✨ PostgreSQL</li>
                <li>✨ TailwindCSS</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
  )
}