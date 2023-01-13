import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Element } from 'react-scroll';
import chibi from '../assets/Krisette_by_doki.png';

export default function AboutMe() {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const y = useTransform(scrollY, [elementTop, elementTop + 1], [1, 0], {
    clamp: false
  });

  useLayoutEffect(() => {
    const element: any = ref.current;
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
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center h-screen"
      >
        <div className="flex items-center justify-center text-white h-full md:h-5/6 ml-5 mr-5 md:m-5 lg:m-5 xl:m-5">
          <a href="https://ko-fi.com/doki_" target="_blank" rel="noreferrer">
            <img src={chibi} alt="chibi art by doki" className="h-96 w-96" />
          </a>
        </div>
        <div className="flex flex-col items-center m-10 md:w-full md:text-lg lg:w-1/2 xl:w-1/2 lg:text-xl xl:text-xl mt-5">
          <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">
            <span className="bg-gradient-to-r from-lightpink to-darkpink font-bold bg-clip-text text-transparent hover-underline-animation">
              about me
            </span>{' '}
            ✨
          </h1>
          <p className="text-gray-50 mb-5">
            Hello! I&apos;m{' '}
            <span className="text-lightpink font-bold">Krisette Odegard</span>{' '}
            and I&apos;m based in Los Angeles, California. When I was a kid on
            the Internet, I loved making &quot;pet pages&quot; for my Neopets,
            so I taught myself HTML & CSS. Over time, this evolved to deploying
            personal blogs in high school (RIP mocha-latte.org). In my past
            life, I was a Registered Nurse, but the universe has a funny way of
            changing things up. Now I&apos;m a{' '}
            <span className="text-lightpink font-bold">
              full-stack software engineer
            </span>{' '}
            that specializes in{' '}
            <span className="text-lightpink font-bold">TypeScript</span>/
            <span className="text-lightpink font-bold">React</span>/
            <span className="text-lightpink font-bold">Node</span>.
          </p>
          <p className="text-gray-50 mb-5">
            In my spare time, I like playing video games like Final Fantasy XIV
            and Stardew Valley, watching anime/TV/movies, traveling, and trying
            new restaurants. I also love Disney theme parks; it&apos;s my goal
            to go to every single Disney park in the world. (If you&apos;re
            wondering, I&apos;m currently 3/6: I&apos;ve been to Disneyland,
            Disney World, and Tokyo Disney so far.)
          </p>
          <p className="text-white mb-5 text-justify">
            Here are some of the technologies I’ve been working with recently:
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              <ul className="text-gray-50 mr-2">
                <li>✨ Node.js/Express</li>
                <li>✨ GraphQL</li>
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
  );
}
