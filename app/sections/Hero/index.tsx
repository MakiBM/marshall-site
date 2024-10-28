"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Portfolio from "@/app/components/svg/Portfolio";
import Scroll from "@/app/components/svg/Scroll";
import style from "./style.module.scss";

export default function Hero() {
  const isMobile = useMediaQuery("(max-aspect-ratio: 1/1) or (max-height: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0.5, 1], ["0rem", "500rem"]);
  const titleY = useTransform(scrollYProgress, [0.5, 1], ["0rem", "700rem"]);
  const portfolioY = useTransform(scrollYProgress, [0.5, 1], ["0vh", "80vh"]);
  const scrollY = useTransform(scrollYProgress, [0.5, 1], ["0vh", "95vh"]);

  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const portfolioOpacity = useTransform(scrollYProgress, [0.5, 0.55], [1, 0]);
  const scrollOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  const defaults = {opacity: 1, y: 0};

  return (
    <section ref={containerRef} className={style.hero}>
      <motion.div className={style.hero__image} style={isMobile ? defaults : { y: imageY, opacity: imageOpacity }}>
        <Image ref={imageRef} src="/img/hero.jpg" alt="hero image" width={866} height={560} />
      </motion.div>
      <motion.h1 ref={nameRef} className={style.hero__name}>
        Marcin Michał Marszałek
      </motion.h1>
      <motion.h2 ref={titleRef} className={style.hero__title} style={isMobile ? defaults : { y: titleY, opacity: titleOpacity }}>
        Abstractions
      </motion.h2>
      <motion.div ref={portfolioRef} className={style.hero__portfolio} style={isMobile ? defaults : { y: portfolioY, opacity: portfolioOpacity }}>
        <Portfolio />
      </motion.div>
      <motion.div ref={scrollRef} className={style.hero__scroll} style={isMobile ? defaults : { y: scrollY, opacity: scrollOpacity }}>
        <div><Scroll /></div>
      </motion.div>
    </section>
  )
}
