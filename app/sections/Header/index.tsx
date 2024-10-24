import Button from "@/app/components/Button";
import Logo from "@/app/components/svg/Logo";
import Burger from "@/app/components/svg/Burger";
import style from "./style.module.scss";

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