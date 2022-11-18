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
    img_src?: string;
    description: string;
    tech: string;
    demo?: string;
    github?: string;
  };
}

const projects = [
  {
    name: 'ghost',
    img_src: Ghost,
    description: 'An AWS Lambda metrics visualizer. Accelerated by OSLabs.',
    tech: 'TypeScript, React, TailwindCSS, MaterialUI, Chart.js, Node.js, Express, Electron, AWS-SDK, AWS Lambda',
    demo: 'https://github.com/oslabs-beta/ghost/releases/tag/v1.0.0',
    github: 'https://github.com/oslabs-beta/ghost'
  },
  {
    name: 'ghost Website',
    img_src: GhostWebsite,
    description: 'Static website for ghost.',
    tech: 'Typescript, React, React Router, TailwindCSS, TailwindUI',
    demo: 'http://os-ghost.github.io/website',
    github: 'https://github.com/os-ghost/website'
  },
  {
    name: 'Imagine',
    img_src: '',
    description:
      'A trip management/planning app for your magical Disney adventures.',
    tech: 'React, Sass, Node.js, Express, MongoDB',
    demo: '',
    github: 'https://github.com/krisette/imagine'
  },
  {
    name: 'Welcome Home, Friend',
    img_src: WelcomeHomeFriend,
    description:
      'A social media app to help owners find their furry friend once again.',
    tech: 'React, PostgreSQL, Node.js, Express, MaterialUI',
    demo: '',
    github: 'https://github.com/WelcomeHomeFriend/welcome-home-friend'
  },
  {
    name: 'Meet Me at the Spot',
    img_src: '',
    description: 'A social media app to share your favorite locations.',
    tech: 'React, PostgreSQL, Node.js, Express, TailwindCSS',
    demo: '',
    github: 'https://github.com/MeetmeattheSpot/Meet-me-at-the-Spot'
  },
  {
    name: 'whatsnext',
    img_src: '',
    description: 'A mood journal & goals tracker.',
    tech: 'React, Next.js, PostgreSQL, Node.js, Express, TailwindCSS'
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
      className="w-96 mt-10"
    >
      <div className="flex flex-col">
        <div>
          <img className="h-48" src={project.img_src} alt="" />
        </div>
        <div>
          <p className="text-xl font-semibold text-white">{project.name}</p>
          <p className="mt-3 text-base text-gray-200">{project.description}</p>
          <p className="mt-3 text-base text-gray-500">{project.tech}</p>
          <a
            href={project.demo}
            className="text-gray-50 hover-underline-animation"
          >
            Demo
          </a>{' '}
          ||
          <a
            href={project.github}
            className="text-gray-50 hover-underline-animation"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Element
      name="experience"
      className="flex flex-col items-center align-center mt-5 mb-10"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2">
        <span className="bg-gradient-to-r from-lightpink to-darkpink font-bold bg-clip-text text-transparent hover-underline-animation">
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
