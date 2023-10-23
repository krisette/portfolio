import React from "react";

interface Props {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialButton = ({ href, label, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden bg-transparent border-2 border-secondary text-white py-2 px-4 rounded-lg flex items-center group focus:outline-primary-light focus:outline-2 focus:outline-offset-2"
    aria-label={label}
  >
    <div className="z-10 flex items-center space-x-2">{children}</div>
    <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
  </a>
);

export default SocialButton;
