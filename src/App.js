import React from "react";
import "./App.css";
import About from "./components/about";
import Exp from "./components/life-exp";
import Projects from "./components/portfolio";
import Skills from "./components/resume";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Exp />
      <Contact />
    </main>
  );
}