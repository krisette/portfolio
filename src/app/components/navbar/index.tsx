"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi";

export function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/documents/Resume.pdf", label: "Download Resume", isButton: true },
  ];

  return (
    <header className="w-full uppercase">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block text-white">
            <Link href="/" aria-label="Home">
              <HiSparkles size={40} className="text-tertiary" />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                aria-label="Toggle mobile menu"
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <nav>
          <ul
            className={`flex flex-col md:flex-row justify-center items-center space-y-2 md:flex md:space-x-8 md:space-y-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  item.isButton
                    ? "text-white hover:text-pink-200"
                    : "hover-underline-animation"
                }`}
              >
                <Link
                  href={item.href}
                  className={`focus:outline-primary-light focus:outline-2 focus:outline-offset-2 ${
                    item.isButton
                      ? "inline-block w-full px-4 py-2 text-center border-solid border-2 border-white rounded-md hover:bg-white hover:text-black"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
