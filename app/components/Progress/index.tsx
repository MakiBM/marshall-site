"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import style from "./style.module.scss";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <div className={style.progress}>
      <motion.div 
        className={style.progress__bar}
        style={{ scaleY }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}