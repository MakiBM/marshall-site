import Image from "next/image";
import ArrowLeftShort from "@/app/components/svg/ArrowLeftShort";
import ArrowRightLong from "@/app/components/svg/ArrowRightLong";
import ArrowLeftLong from "@/app/components/svg/ArrowLeftLong";
import style from "./style.module.scss";

export default function Details() {
  return (
    <section id="details" className={style.details}>
      <a className={style.details__back} href="/#gallery">
        <ArrowLeftShort />
        <span>Gallery</span>
      </a>
      <div className={style.details__img}>
        <Image
          src="/img/gallery_1.jpg"
          alt="details image"
          width={432}
          height={417}
        />
      </div>
      <div className={style.details__contents}>
        <h2 className={style.details__title}>Project title line</h2>
        <div className={style.details__tag}>
          <span>#Paintings</span>
        </div>
        <div className={style.details__text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
      <div className={style.details__nav}>
        <a href="/single">
          <ArrowLeftLong />
        </a>
        <a href="/single">
          <ArrowRightLong />
        </a>
      </div>
    </section>
  );
}
