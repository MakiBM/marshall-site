"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Facebook from "@/app/components/svg/Facebook";
import Linkedin from "@/app/components/svg/Linkedin";
import Instagram from "@/app/components/svg/Instagram";
import style from "./style.module.scss";

export default function Contact() {
  const isMobile = useMediaQuery("(max-aspect-ratio: 1/1) or (max-height: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["200rem", "0rem"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["100rem", "0rem"]);

  return (
    <section ref={containerRef} className={style.contact}>
      <Image className={style.contact__img} src="/img/hero.jpg" alt="" width={861} height={279} />
      <motion.h1 className={style.contact__title} style={{ y: isMobile ? 0 : titleY }}>Contact</motion.h1>
      <motion.p className={style.contact__text} style={{ y: isMobile ? 0 : textY }}>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
      </motion.p>
      <div className={style.contact__follow}>
        Follow:
        <a href="https://www.facebook.com/marcin.michal.marszalek" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/marcin-michal-marszalek-010200200/" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/marcin_michal_marszalek/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </div>
      <div className={style.contact__links}>
        <a href="mailto:marcin.michal.marszalek@gmail.com">marcin.michal.marszalek@gmail.com</a>
        <a href="tel:+48500500500">+48 500 500 500</a>
      </div>
    </section>
  )
}