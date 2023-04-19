import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center mb-16">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl text-blue-400 mb-4">
            Skills &amp; Certifications
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blue-400">
            These are skills that I have obtained through my first 2 semesters,
            this list will continue to grow as i continue to learn!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-blue-400 rounded flex p-3 h-full items-center">
                <BadgeCheckIcon className="text-black w-5 h-5 flex-shrink-0 mr-4" />
                <span className=" text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
