import Image from "next/image";
import style from "./style.module.scss";
import Portfolio from "@/app/components/svg/Portfolio";
import Scroll from "@/app/components/svg/Scroll";

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
      <h1 className={style.hero__name}>Marcin Michał Marszałek</h1>
      <h2 className={style.hero__title}>Abstractions</h2>
      <div className={style.hero__portfolio}>
        <Portfolio />
      </div>
      <div className={style.hero__scroll}>
        <Scroll />
      </div>
    </section>
  )
}