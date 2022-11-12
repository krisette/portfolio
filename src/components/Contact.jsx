import React, { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from "framer-motion"
import { Element } from 'react-scroll'

export default function Contact() {
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
    <Element name="contact">
     <div className="flex flex-col justify-center items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1  }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1 }
            }}
            style={{ y }}
            className="flex flex-col items-center justify-center w-full z-2 mb-16">
            <h1 className="text-gray-50 mb-5 text-xl lg:text-2xl xl:text-3xl">Feel free to reach out to me. Let's <span className="text-pink-100 font-bold">connect</span>!</h1>
          </motion.div>
        </div>
      </Element>
  )
}