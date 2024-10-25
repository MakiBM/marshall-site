"use client";

import { useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Featured/>
      <Gallery/>
      <About/>
      <Contact/>
    </>
  );
}
