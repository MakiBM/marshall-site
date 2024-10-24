import Image from "next/image";
import Scroll from "@/app/components/svg/Scroll";
import style from "./style.module.scss";

export default function About() {
  return (
    <section className={style.about}>
      <Image className={style.about__img} src="/img/eyes.jpg" alt="" width={861} height={279} />
      <h1 className={style.about__title}>About <br /> &nbsp;&nbsp; the artist</h1>
      <p className={style.about__text}>
      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
      </p>
      <div className={style.about__scroll}>
        <Scroll />
      </div>
    </section>
  )
}