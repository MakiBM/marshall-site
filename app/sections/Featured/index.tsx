import Image from "next/image";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import style from "./style.module.scss";

export default function Featured() {
  const isMobile = useMediaQuery("(max-aspect-ratio: 1/1) or (max-height: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const image1Y = useTransform(scrollYProgress, [0, 1], ["-150rem", "300rem"]);
  const title1Y = useTransform(scrollYProgress, [0, 1], ["-200rem", "400rem"]);
  const image2Y = useTransform(scrollYProgress, [0, 1], ["250rem", "-500rem"]);
  const title2Y = useTransform(scrollYProgress, [0, 1], ["-100rem", "500rem"]);
  const image3Y = useTransform(scrollYProgress, [0, 1], ["0rem", "100rem"]);
  const title3Y = useTransform(scrollYProgress, [0, 1], ["-300rem", "300rem"]);

  return (
    <section id="featured" ref={containerRef} className={style.featured}>
      <motion.div className={`${style.featured__img} ${style.featured__img_1}`} style={{ y: isMobile ? 0 : image1Y }}>
        <Image
          src="/img/gallery_1.jpg"
          alt="featured image 1"
          width={598}
          height={618}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_1}`} style={{ y: isMobile ? 0 : title1Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>

      <motion.div className={`${style.featured__img} ${style.featured__img_2}`} style={{ y: isMobile ? 0 : image2Y }}>
        <Image
          src="/img/gallery_2.jpg"
          alt="featured image 2"
          width={618}
          height={899}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_2}`} style={{ y: isMobile ? 0 : title2Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>

      <motion.div className={`${style.featured__img} ${style.featured__img_3}`} style={{ y: isMobile ? 0 : image3Y }}>
        <Image
          src="/img/gallery_3.jpg"
          alt="featured image 3"
          width={1543}
          height={799}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_3}`} style={{ y: isMobile ? 0 : title3Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>
    </section>
  );
}
