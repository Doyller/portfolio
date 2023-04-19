import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-2xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Isaac Doyle.
            <br></br>
             I'm attending Keyin college, training to become a full stack
            developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm currently about to start my third semester, putting me on track
            to graduate in December, 2023.
            I'm an extremely hard-worker. I work well on teams and
              individually, I also bring knowledge in running a team.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-4 px-10 focus:outline-none hover:bg-blue-200 rounded text-lg"
            >
              {" "}
              Get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-4 px-10 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              {" "}
              See some work
            </a>
          </div>
        </div>
        <img
          className="rounded border border-white"
          src= "images/MicrosoftTeams-image.png"
        ></img>
        </div>
    </section>
  );
}
