import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Element } from 'react-scroll';

export default function Contact() {
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
    <Element name="contact">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1 }
          }}
          style={{ y }}
          className="flex flex-col items-center justify-center w-full mb-20"
        >
          <h1 className="text-gray-50 text-5xl md:text-6xl xl:text-7xl">
            let&apos;s{' '}
            <span className="bg-gradient-to-r from-pink-200 to-pink-500 font-bold bg-clip-text text-transparent hover-underline-animation">
              connect
            </span>{' '}
            ✨
          </h1>
        </motion.div>
      </div>
    </Element>
  );
}
