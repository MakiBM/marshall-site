import Image from "next/image";
import style from "./style.module.scss";
import Facebook from "@/app/components/svg/Facebook";
import Linkedin from "@/app/components/svg/Linkedin";
import Instagram from "@/app/components/svg/Instagram";

export default function Contact() {
  return (
    <section className={style.contact}>
      <Image className={style.contact__img} src="/img/hero.jpg" alt="" width={861} height={279} />
      <h1 className={style.contact__title}>Contact</h1>
      <p className={style.contact__text}>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
      </p>
      <div className={style.contact__follow}>
        Follow:
        <a href="https://www.facebook.com/marcin.michal.marszalek" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/marcin-michal-marszalek-010200200/" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/marcin_michal_marszalek/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </div>
      <div className={style.contact__links}>
        <a href="mailto:marcin.michal.marszalek@gmail.com">marcin.michal.marszalek@gmail.com</a>
        <a href="tel:+48500500500">+48 500 500 500</a>
      </div>
    </section>
  )
}