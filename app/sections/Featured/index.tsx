import style from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

export default function Featured() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const image1Y = useTransform(scrollYProgress, [0, 1], ["0rem", "300rem"]);
  const title1Y = useTransform(scrollYProgress, [0, 1], ["-200rem", "800rem"]);
  const image2Y = useTransform(scrollYProgress, [0, 1], ["0rem", "500rem"]);
  const title2Y = useTransform(scrollYProgress, [0, 1], ["-100rem", "1000rem"]);
  const image3Y = useTransform(scrollYProgress, [0, 1], ["0rem", "100rem"]);
  const title3Y = useTransform(scrollYProgress, [0, 1], ["-300rem", "300rem"]);

  return (
    <section ref={containerRef} className={style.featured}>
      <motion.div className={`${style.featured__img} ${style.featured__img_1}`} style={{ y: image1Y }}>
        <Image
          src="/img/gallery_1.jpg"
          alt="featured image 1"
          width={598}
          height={618}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_1}`} style={{ y: title1Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>

      <motion.div className={`${style.featured__img} ${style.featured__img_2}`} style={{ y: image2Y }}>
        <Image
          src="/img/gallery_2.jpg"
          alt="featured image 2"
          width={618}
          height={899}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_2}`} style={{ y: title2Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>

      <motion.div className={`${style.featured__img} ${style.featured__img_3}`} style={{ y: image3Y }}>
        <Image
          src="/img/gallery_3.jpg"
          alt="featured image 3"
          width={1543}
          height={799}
        />
      </motion.div>
      <motion.h3 className={`${style.featured__title} ${style.featured__title_3}`} style={{ y: title3Y }}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </motion.h3>
    </section>
  );
}
