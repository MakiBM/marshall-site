"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Header from "../sections/Header";
import Details from "../sections/Details";

export default function Page() {

  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <>
      <Header/>
      <Details/>
    </>
  );
}
