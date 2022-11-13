/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import { ISourceOptions, tsParticles } from 'tsparticles-engine';
import type { Engine } from 'tsparticles-engine';
import { loadHeartShape } from 'tsparticles-shape-heart';
import particlesOptions from './config/particles.json';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Links from './components/Links';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

loadHeartShape(tsParticles);

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <NavBar />
      <Content />
      <AboutMe />
      <Experience />
      <Contact />
      <Links />
      {showButton ? <BackToTop /> : null}
    </div>
  );
}

export default App;
