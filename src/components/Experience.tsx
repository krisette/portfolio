import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import ghost from '../assets/ghost.png';
import ghostAnim from '../assets/ghost_animated.gif';
import ghostWebsite from '../assets/ghost_website.png';
import ghostWebsiteAnim from '../assets/ghost_website_animated.gif';
import Imagine from '../assets/imagine.png';
import ImagineAnim from '../assets/imagine_animated.gif';
import WelcomeHomeFriend from '../assets/welcome_home_friend.png';
import MeetMeAtTheSpot from '../assets/meetmeatthespot.png';
import whatsnext from '../assets/whatsnext.png';

interface Props {
  project: {
    name: string;
    img_src?: string;
    img_anim?: string;
    role: string;
    description: string;
    tech: string;
    demo?: string;
    github?: string;
  };
}

const projects = [
  {
    name: 'ghost',
    img_src: ghost,
    img_anim: ghostAnim,
    role: 'Front End',
    description: 'AWS Lambda metrics monitoring tool. Accelerated by OSLabs.',
    tech: 'TypeScript, React, TailwindCSS, MaterialUI, Chart.js, Node.js, Express, Electron, AWS-SDK, AWS Lambda',
    demo: 'https://github.com/oslabs-beta/ghost/releases/tag/v1.0.0',
    github: 'https://github.com/oslabs-beta/ghost'
  },
  {
    name: 'ghost Website',
    img_src: ghostWebsite,
    img_anim: ghostWebsiteAnim,
    role: 'Front End',
    description: 'Static website for ghost.',
    tech: 'TypeScript, React, React Router, TailwindCSS, TailwindUI',
    demo: 'http://os-ghost.github.io/website',
    github: 'https://github.com/os-ghost/website'
  },
  {
    name: 'Imagine',
    img_src: Imagine,
    img_anim: ImagineAnim,
    role: 'Full Stack',
    description:
      'A trip management/planning app for your magical Disney adventures.',
    tech: 'v1: React, Sass, Node.js, Express, MongoDB; v2: React, Sass, Node/Express, MongoDB, Redux, GraphQL',
    demo: '',
    github: 'https://github.com/krisette/imagine/tree/v2'
  },
  {
    name: 'Welcome Home, Friend',
    img_src: WelcomeHomeFriend,
    img_anim: WelcomeHomeFriend,
    role: 'Front End',
    description:
      'A social media app to help owners find their furry friend once again.',
    tech: 'React, PostgreSQL, Node.js, Express, MaterialUI',
    demo: '',
    github: 'https://github.com/WelcomeHomeFriend/welcome-home-friend'
  },
  {
    name: 'Meet Me at the Spot',
    img_src: MeetMeAtTheSpot,
    img_anim: MeetMeAtTheSpot,
    role: 'Back End',
    description: 'A social media app to share your favorite locations.',
    tech: 'React, PostgreSQL, Node.js, Express, TailwindCSS, Google Maps API',
    demo: '',
    github: 'https://github.com/MeetmeattheSpot/Meet-me-at-the-Spot'
  },
  {
    name: 'whatsnext',
    img_src: whatsnext,
    img_anim: whatsnext,
    role: 'Back End',
    description: `A calendar app that allows users to write down their thoughts, track their mood, and set goals from day to day.`,
    demo: '',
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

function AnimatedBox({ project }: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  // change image to animated gif on hover
  const [hoverOn, setHoverOn] = React.useState(false);
  const toggleHoverOn = () => setHoverOn(true);
  const toggleHoverOff = () => setHoverOn(false);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="w-20 lg:w-96 xl:w-96 lg:mt-10 xl:mt-10"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <img
            className="h-48 rounded-lg hover:cursor-pointer hover:scale-125"
            src={hoverOn ? project.img_anim : project.img_src}
            alt=""
            onMouseEnter={toggleHoverOn}
            onMouseLeave={toggleHoverOff}
          />
        </div>
        <div className="bg-zinc-600 bg-opacity-60 w-96 p-5 rounded-lg">
          <p className="text-xl text-white">
            <span className="font-semibold">{project.name}</span>{' '}
            <span className="text-zinc-400">({project.role})</span>
          </p>
          <p className="mt-3 text-base text-zinc-200">{project.description}</p>
          <p className="my-3 text-base text-zinc-400">{project.tech}</p>
          {project.demo !== '' && (
            <a
              href={project.demo}
              className="text-gray-50 hover-underline-animation"
            >
              Demo
            </a>
          )}{' '}
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

function RegularBox({ project }: Props) {
  return (
    <div className="flex flex-col mb-10">
      <div className="flex items-center justify-center">
        <img className="h-48 rounded-lg" src={project.img_src} alt="" />
      </div>
      <div className="bg-zinc-600 bg-opacity-60 w-96 p-5 rounded-lg mx-5">
        <p className="text-xl font-semibold text-white">{project.name}</p>
        <p className="mt-3 text-base text-zinc-200">{project.description}</p>
        <p className="my-3 text-base text-zinc-400">{project.tech}</p>
        {project.demo !== '' && (
          <a
            href={project.demo}
            className="text-gray-50 hover-underline-animation"
          >
            Demo
          </a>
        )}{' '}
        <a
          href={project.github}
          className="text-gray-50 hover-underline-animation"
        >
          GitHub
        </a>
      </div>
    </div>
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
      <div className="hidden md:hidden lg:grid xl:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {projects.map((project) => (
          <AnimatedBox key={project.name} project={project} />
        ))}
      </div>
      <div className="lg:hidden xl:hidden">
        {projects.map((project) => (
          <RegularBox key={project.name} project={project} />
        ))}
      </div>
    </Element>
  );
}
