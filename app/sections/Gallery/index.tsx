import style from "./style.module.scss";
import Image from "next/image";

export default function Gallery() {
  const imgs = ['/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg', '/img/gallery_1.jpg', '/img/gallery_2.jpg', '/img/gallery_3.jpg'];
  
  return (
    <section className={style.gallery}>
      {imgs.map((_, i) => (
        <Image 
          className={style.gallery__img}
          src={imgs[i]}
          alt={`Gallery image ${i + 1}`}
          key={i}
          width={1000}
          height={1000}
        />
      ))}
    </section>
  )
}