"use client";

import LocomotiveScroll from 'locomotive-scroll';
import { useStore } from "@/stores/store";
import Button from "@/app/components/Button";
import Logo from "@/app/components/svg/Logo";
import Burger from "@/app/components/svg/Burger";
import style from "./style.module.scss";
import { useEffect } from 'react';

export default function Header() {
  const { portraitInView } = useStore();
  let locomotiveScroll: LocomotiveScroll;

  useEffect(() => {
    locomotiveScroll = new LocomotiveScroll();
  }, []);
  
  const scrollTo = (target: string) => locomotiveScroll.scrollTo(target);

  return (
    <header className={`${style.header} ${portraitInView ? style.header__portrait : ""}`}>
      <div className={style.header__logo}> <Logo/> </div>
      <div className={style.header__title}> Marcin Michał Marszałek </div>
      <div className={style.header__actions}>
        <a href="/"> <Button>Buy on Etsy</Button> </a>
        <span className={style.header__burger}>
          <Burger/>
          <div className={style.header__menu}>
            <a href="#home" onClick={() => scrollTo('#home')}>Home</a>
            <a href="#featured" onClick={() => scrollTo('#featured')}>Featured</a>
            <a href="#gallery" onClick={() => scrollTo('#gallery')}>Gallery</a>
            <a href="#about" onClick={() => scrollTo('#about')}>About</a>
            <a href="#contact" onClick={() => scrollTo('#contact')}>Contact</a>
          </div>
        </span>
      </div>
    </header>
  )
}