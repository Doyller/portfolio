import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-400 md:sticky top-0 border-white border z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Isaac Doyle
          </a>
        </a>
        <nav className="text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-10">
            Projects
          </a>
          <a href="#skills" className="mr-10">
            Skills and Certifications
          </a>
          <a href="#experience" className="mr-10">
            Life Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
