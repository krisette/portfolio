import React from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';

export default function Content() {
  return(
      <AnimateSharedLayout>
        <div className="flex flex-1 h-screen max-h-fit flex-col">
          <div className="mt-40 flex flex-col justify-center items-center">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center w-full font-dmSans z-2">
              <h1 className="text-white text-5xl md:text-6xl xl:text-7xl z-10">hi i&apos;m <span className="bg-gradient-to-r from-pink-300 to-rose-400 font-bold bg-clip-text text-transparent">krisette</span> ✨</h1>
              <h2 className="text-white text-2xl md:text-2xl lg:text-4xl mt-2">software engineer <span className="bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">+</span> RN</h2>
              <h3 className="text-white mt-8 text-1xl md:text-1xl lg:text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" id="bi-bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>los angeles</h3>
            </motion.div>
        </div>
    </div>
  </AnimateSharedLayout>
)}