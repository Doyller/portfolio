import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { exp } from "../data";

export default function Exp() {
  return (
    <section id="experience">
      <div className="container px-4 py-10 mx-auto text-center">
        <UsersIcon className="w-8 inline-block mb-3" />
        <h1 className="sm:text-4xl text-3xl text-white mb-12">
          Life and Employment Experience
        </h1>
        <div className="flex flex-wrap m-3">
          {exp.map((exp) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-400 p-8 rounded">
                <TerminalIcon className="block w-8 text-black mb-4" />
                <p className=" mb-6 text-white">{exp.description}</p>
                <span className="flex-grow flex flex-col pl-3">
                  <span className="title-font font-medium text-white">
                    {exp.title}
                  </span>
                  <span className="text-black text-sm">
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
