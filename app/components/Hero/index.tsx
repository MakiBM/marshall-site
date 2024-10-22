import Image from "next/image";
import style from "./style.module.css";
import Portfolio from "../svg/Portfolio";
import Scroll from "../svg/Scroll";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Image
        className={style.hero__image}
        src="/img/hero.jpg"
        alt="hero image"
        width={866}
        height={560}
      />
      <h1 className={style.hero__title}>Abstractions</h1>
      <div className={style.hero__portfolio}>
        <Portfolio />
      </div>
      <div className={style.hero__scroll}>
        <Scroll />
      </div>
    </section>
  )
}