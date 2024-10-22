import Button from "../Button";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__logo}> <Logo/> </div>
      <div className={style.header__title}> Marcin Michał Marszałek </div>
      <div className={style.header__actions}>
        <a href="/"> <Button>Buy on Etsy</Button> </a>
        <a className={style.header__burger} href="/"> <Burger/> </a>
      </div>
    </header>
  )
}