import style from "./style.module.scss";
import Image from "next/image";

export default function Featured() {
  return (
    <div className={style.featured}>
      <Image
        className={`${style.featured__img} ${style.featured__img_1}`}
        src="/img/gallery_1.jpg"
        alt="featured image 1"
        width={598}
        height={618}
      />
      <h3 className={`${style.featured__title} ${style.featured__title_1}`}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </h3>

      <Image
        className={`${style.featured__img} ${style.featured__img_2}`}
        src="/img/gallery_2.jpg"
        alt="featured image 2"
        width={618}
        height={899}
      />
      <h3 className={`${style.featured__title} ${style.featured__title_2}`}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </h3>

      <Image
        className={`${style.featured__img} ${style.featured__img_3}`}
        src="/img/gallery_3.jpg"
        alt="featured image 3"
        width={1543}
        height={799}
      />
      <h3 className={`${style.featured__title} ${style.featured__title_3}`}>
        <span>Project title line</span><br />
        <a className={style.featured__link}>Details</a>
      </h3>
    </div>
  );
}
