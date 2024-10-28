"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import style from "./style.module.scss";

export default function Gallery() {
  const imgs: string[] = ['/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg', '/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg'];

  return (
    <section className={style.gallery}>
      {imgs.map((img, i) => (
        <GalleryItem key={i} img={img} index={i} />
      ))}
    </section>
  )
}

function GalleryItem({ img, index }: { img: string, index: number }) {
  const isMobile = useMediaQuery("(max-aspect-ratio: 1/1) or (max-height: 768px)");
  const ref = useRef<HTMLDivElement>(null);

  const variants: Variants = {
    hidden: {
      opacity: isMobile ? 1 : 0
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={style.gallery__img}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.2 }}
    >
      <Image 
        src={img}
        alt={`Gallery image ${index + 1}`}
        width={1000}
        height={1000}
      />
    </motion.div>
  );
}
