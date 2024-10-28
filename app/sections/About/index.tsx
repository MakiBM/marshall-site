"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, useMotionTemplate, useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useStore } from "@/stores/store";
import Scroll from "@/app/components/svg/Scroll";
import style from "./style.module.scss";
export default function About() {
  const isMobile = useMediaQuery("(max-aspect-ratio: 1/1) or (max-height: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["200rem", "0rem"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["100rem", "0rem"]);
  const scrollY = useTransform(scrollYProgress, [0.35, 0.65], ["0", "80vh"]);
  
  const imgY = useTransform(scrollYProgress, [0.35, 0.65], ["0", "100vh"]);
  const cp = (from: number, to: number) => useTransform(scrollYProgress, [0.35, 0.65], [100 / 16 * from, to]);
  const clipPath = useMotionTemplate`polygon(
    ${cp(4, 0)}% ${cp(4, 0)}%,
    ${cp(12, 100)}% ${cp(4, 0)}%,
    ${cp(12, 100)}% ${cp(8, 100)}%,
    ${cp(4, 0)}% ${cp(8, 100)}%
  )`;

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    useStore.setState({ portraitInView: latest > 0.65 && latest < 0.975 });
  })
  
  return (
    <section ref={containerRef} className={style.about}>
      {isMobile ? (
        <div className={style.about__img}>
          <Image src="/img/eyes.jpg" alt="" width={861} height={279} />
        </div>
      ) : (
        <motion.div className={style.about__img} style={{ clipPath, y: imgY }}>
          <Image src="/img/portrait.jpg" alt="" width={1728} height={1117} />
        </motion.div>
      )}
      <motion.h1 className={style.about__title} style={{ y: isMobile ? 0 : titleY }}>
        About <br /> &nbsp;&nbsp; the artist
      </motion.h1>
      <motion.p className={style.about__text} style={{ y: isMobile ? 0 : textY }}>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
      </motion.p>
      <motion.div className={style.about__scroll} style={{ y: isMobile ? 0 : scrollY }}>
        <Scroll />
      </motion.div>
    </section>
  )
}