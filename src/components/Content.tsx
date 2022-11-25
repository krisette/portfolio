import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Content() {
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
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ y }}
          className="flex flex-col items-center justify-center w-full h-[50vh] z-2"
        >
          <h1 className="text-gray-50 text-5xl md:text-6xl xl:text-7xl z-10">
            hi, i&apos;m{' '}
            <span className="bg-gradient-to-r from-lightpink to-darkpink font-bold bg-clip-text text-transparent hover-underline-animation">
              krisette
            </span>{' '}
            ✨
          </h1>
          <h2 className="text-gray-50 text-2xl md:text-2xl lg:text-4xl mt-2">
            software engineer{' '}
            <span className="bg-gradient-to-r from-lightpink to-darkpink bg-clip-text text-transparent">
              +
            </span>{' '}
            <TypeAnimation
              sequence={[
                'traveler',
                2000,
                'disney park enthusiast',
                2000,
                'FFXIV reaper main',
                2000,
                'cat mom',
                2000,
                'former RN',
                2000,
                'nap aficionado',
                2000
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <h3 className="text-gray-50 mt-8 text-1xl md:text-1xl lg:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              id="bi-bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            los angeles
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
