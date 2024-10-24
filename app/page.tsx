import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {
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
