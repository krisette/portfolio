import Picture from "./Krisette_by_doki.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-2 lg:px-16 h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full text-center lg:text-left items-center justify-center">
        <div className="order-2 lg:order-1 flex flex-col lg:pl-16 mb-4 lg:mb-0 w-full lg:w-auto">
          <span className="text-2xl lg:ml-[2px]">Hello there! My name is</span>
          <span className="text-4xl lg:text-6xl font-bold lg:-mt-2 uppercase bg-gradient-to-r from-primary-light to-accent-lightest bg-clip-text text-transparent">
            Krisette Odegard
          </span>
          <span className="text-2xl lg:-mt-2 lg:ml-[2px]">
            and I&#39;m a{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-[4px] bg-primary block transform -translate-y-[2px] z-0"></span>
              <span className="z-10 hover-underline-animation font-semibold">
                software engineer
              </span>
            </span>{" "}
            based in Los Angeles.
          </span>
          <div className="flex mt-4 space-x-8 justify-center">
            <a
              href="https://github.com/krisette"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden bg-transparent border-2 border-secondary text-white py-2 px-4 rounded-lg flex items-center group">
                <div className="z-10 flex items-center space-x-2">
                  <FaGithub />
                  <span>GitHub</span>
                </div>
                <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </a>
            <a
              href="https://linkedin.com/in/krisette"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden bg-transparent border-2 border-secondary text-white py-2 px-4 rounded-lg flex items-center group">
                <div className="z-10 flex items-center space-x-2">
                  <FaLinkedin className="mr-2" /> <span>LinkedIn</span>
                </div>
                <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center flex-grow">
          <a
            href="https://ko-fi.com/doki_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Picture} alt="chibi art by doki" height={500} />
          </a>
        </div>
      </div>
    </main>
  );
}
