"use client";

import style from "./style.module.scss";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  const variants: Variants = {
    hidden: {
      opacity: 0
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
