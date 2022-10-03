import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './config/particles.json';
import { tsParticles } from 'tsparticles-engine';
import { loadHeartShape } from 'tsparticles-shape-heart';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Links from './components/Links';
import AboutMe from './components/AboutMe';
import { Outlet } from "react-router-dom";

loadHeartShape(tsParticles);

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>
        <Particles options={particlesOptions} init={particlesInit}/>
        <NavBar />
        {/* <Content /> */}
        {/* <AboutMe /> */}
        <Outlet />
        <Links />
        </div>
    )}

export default App;
