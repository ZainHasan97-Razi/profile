"use client";

import Image from "next/image";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Skills from "./components/skill";
import Projects from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
