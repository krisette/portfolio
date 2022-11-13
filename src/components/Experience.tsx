import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import WelcomeHomeFriend from '../assets/welcome_home_friend.png';
import GhostWebsite from '../assets/ghost_website.png';
import Ghost from '../assets/ghost.png';

interface Props {
  project: {
    name: string;
    img_src: string;
    description: string;
    tech: string;
    demo: string;
    github: string;
  };
}

const projects = [
  {
    name: 'Ghost',
    img_src: Ghost,
    description: 'An AWS Lambda metrics visualizer. Accelerated by OSLabs.',
    tech: 'Typescript, React, TailwindCSS, HTML5, MaterialUI, Electron, AWS-SDK',
    demo: 'https://github.com/oslabs-beta/ghost/releases/tag/v1.0.0',
    github: 'https://github.com/oslabs-beta/ghost'
  },
  {
    name: 'Ghost Website',
    img_src: GhostWebsite,
    description: 'Static website for Ghost.',
    tech: 'Typescript, React, React Router, TailwindCSS, TailwindUI',
    demo: 'http://os-ghost.github.io/website',
    github: 'https://github.com/os-ghost/website'
  },
  {
    name: 'Imagine',
    img_src: '',
    description:
      'A trip management/planning app for your magical Disney adventures.',
    tech: 'React, MongoDB, Node.js, Express, HTML5, Sass',
    demo: '',
    github: 'https://github.com/krisette/imagine'
  },
  {
    name: 'Welcome Home, Friend',
    img_src: WelcomeHomeFriend,
    description:
      'A social media app to help owners find their furry friend once again.',
    tech: 'React, PostgresQL, Node.js, Express, HTML5, MaterialUI',
    demo: '',
    github: 'https://github.com/WelcomeHomeFriend/welcome-home-friend'
  },
  {
    name: 'Meet Me at the Spot',
    img_src: '',
    description: 'A social media app to share your favorite locations.',
    tech: 'React, PostgresQL, Node.js, Express, HTML5, MaterialUI',
    demo: '',
    github: 'https://github.com/MeetmeattheSpot/Meet-me-at-the-Spot'
  }
];

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  hidden: { opacity: 0, scale: 1, x: -500 }
};

function Box({ project }: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="flex">
        <img className="h-48 object-cover" src={project.img_src} alt="" />
      </div>
      <div className="flex flex-1 flex-col text-white p-6 h-24">
        <p className="text-xl font-semibold">{project.name}</p>
        <p className="mt-3 text-base text-gray-500">{project.description}</p>
      </div>
      <div className="mt-6 flex items-center">
        <p className="mt-3 text-base text-gray-500">{project.tech}</p>
        <div className="ml-3">
          <p className="text-sm font-medium text-white">
            <a href={project.demo} className="hover:underline">
              Demo
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <a href={project.github} className="hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Element
      name="experience"
      className="flex flex-col items-center align-center"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">
        <span className="bg-gradient-to-r from-pink-100 to-pink-400 font-bold bg-clip-text text-transparent hover-underline-animation">
          experience
        </span>{' '}
        ✨
      </h1>
      {projects.map((project) => (
        <Box key={project.name} project={project} />
      ))}
    </Element>
  );
}
