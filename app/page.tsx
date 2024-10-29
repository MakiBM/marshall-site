"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Progress from "./components/Progress";

export default function Home() {

  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <>
      <Progress/>
      <Header/>
      <Hero/>
      <Featured/>
      <Gallery/>
      <About/>
      <Contact/>
    </>
  );
}
