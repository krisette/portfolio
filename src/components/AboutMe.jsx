import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { useScroll, useTransform } from "framer-motion"
import { Element } from 'react-scroll'

export default function AboutMe() {
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
    <Element name="aboutme">
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        style={{ y }}
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center h-screen">
          <div className="flex items-center justify-center text-white h-full md:h-5/6 ml-5 mr-5 md:m-5 lg:m-5 xl:m-5">
            {/* picture here */}
          </div>
        <div className="flex flex-col items-center m-10 md:w-1/3 lg:w-1/2 xl:w-1/2 lg:text-xl xl:text-xl mt-5">
          <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2"><span className="bg-gradient-to-r from-pink-100 to-pink-400 font-bold bg-clip-text text-transparent hover-underline-animation">about me</span> ✨</h1>
          <p className="text-gray-50 mb-5">Hello! I'm <span className="text-pink-100 font-bold">Krisette Odegard</span> and I'm based in Los Angeles, California. When I was a kid on the Internet, I loved making "pet pages" for my Neopets, so I taught myself HTML & CSS. Over time, this evolved to deploying personal blogs in high school (RIP mocha-latte.org). In 2016, I graduated from nursing school and began a career in health care as a Registered Nurse. Life has a funny way of changing things up, and I decided to revisit my childhood passion. Now I'm a <span className="text-pink-100 font-bold">full-stack software engineer</span> that specializes in <span className="text-pink-100 font-bold">TypeScript</span>/<span className="text-pink-100 font-bold">React</span>/<span className="text-pink-100 font-bold">Node</span>.</p>
          <p className="text-gray-50 mb-5">In my spare time, I like playing video games like Final Fantasy XIV and Stardew Valley, watching anime/TV/movies, and trying new restaurants. I also love Disney theme parks; it's my goal to go to every single Disney park in the world. (If you're wondering, I'm currently 3/7: I've been to Disneyland, Disney World, and Tokyo Disney so far.)</p>
          <p className="text-white mb-5 text-justify">Here are some of the technologies I’ve been working with recently:</p>
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              <ul className="text-gray-50 mr-2">
                <li>✨ Node.js</li>
                <li>✨ Express</li>
                <li>✨ TypeScript</li>
                <li>✨ JavaScript (ES6+)</li>
                <li>✨ React (Hooks/Router)</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-50">
                <li>✨ Redux</li>
                <li>✨ NoSQL databases</li>
                <li>✨ SQL databases</li>
                <li>✨ TailwindCSS</li>
                <li>✨ Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  )
}