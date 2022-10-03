import React, { useCallback } from 'react';
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from '../config/particles.json';
import { tsParticles } from 'tsparticles-engine';
import { loadHeartShape } from 'tsparticles-shape-heart';
import { useRouteError } from "react-router-dom";
import NavBar from './NavBar';
import Links from './Links';

loadHeartShape(tsParticles);

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div>
      <Particles options={particlesOptions} init={particlesInit}/>
      <NavBar />
    <AnimateSharedLayout>
    <div className="flex flex-1 h-screen flex-col">
      <div className="mt-40 flex flex-col justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center w-full font-dmSans z-2">
          <h1 className="bg-gradient-to-r from-pink-100 to-pink-400 font-bold bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl z-10 mb-5 lowercase">
            Oh no!
           </h1>
           <p className="text-gray-50 lowercase">Sorry, an unexpected error has occurred.</p>
           <p className="text-gray-50 mb-5 lowercase">Check out the links above to get back to where you were.</p>
            <p className="text-gray-50 lowercase text-xs">
                <i>Error: {error.statusText || error.message}</i>
            </p>
            </motion.div>
        </div>
    </div>
  </AnimateSharedLayout>
  <Links />
</div>
)}