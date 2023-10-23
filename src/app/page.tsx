import Picture from "./Krisette_by_doki.png";
import Image from "next/image";
import SocialButton from "./components/social-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-2 lg:px-16 h-screen overflow-hidden">
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
            <SocialButton
              href="https://github.com/krisette"
              label="Visit my GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </SocialButton>

            <SocialButton
              href="https://linkedin.com/in/krisette"
              label="Visit my LinkedIn"
            >
              <FaLinkedin className="mr-2" />
              <span>LinkedIn</span>
            </SocialButton>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center flex-grow">
          <a
            href="https://ko-fi.com/doki_"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-primary-light focus:outline-2 focus:outline-offset-2"
          >
            <Image
              src={Picture}
              alt="chibi drawing of myself by doki"
              height={500}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
