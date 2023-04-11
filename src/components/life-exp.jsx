import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { exp } from "../data";

export default function Exp() {
  return (
    <section id="testimonials">
      <div className="container px-4 py-10 mx-auto text-center">
        <UsersIcon className="w-8 inline-block mb-3" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Life and employment experience
        </h1>
        <div className="flex flex-wrap m-3">
          {exp.map((exp) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-500 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-blue-500 mb-4" />
                <p className="leading-relaxed mb-6">{exp.description}</p>
                <span className="flex-grow flex flex-col pl-3">
                  <span className="title-font font-medium text-white">
                    {exp.title}
                  </span>
                  <span className="text-blue-500 text-sm">
                    {exp.year}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
