import { useStore } from "@/stores/store";
import Button from "@/app/components/Button";
import Logo from "@/app/components/svg/Logo";
import Burger from "@/app/components/svg/Burger";
import style from "./style.module.scss";

export default function Header() {
  const { portraitInView } = useStore();

  return (
    <header className={`${style.header} ${portraitInView ? style.header__portrait : ""}`}>
      <div className={style.header__logo}> <Logo/> </div>
      <div className={style.header__title}> Marcin Michał Marszałek </div>
      <div className={style.header__actions}>
        <a href="/"> <Button>Buy on Etsy</Button> </a>
        <span className={style.header__burger} href="/">
          <Burger/>
          <div className={style.header__menu}>
            <a href="/">Home</a>
            <a href="/">Gallery</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </span>
      </div>
    </header>
  )
}