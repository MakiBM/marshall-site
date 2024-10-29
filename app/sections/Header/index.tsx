"use client";

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';
import { useStore } from "@/stores/store";
import Button from "@/app/components/Button";
import Logo from "@/app/components/svg/Logo";
import Burger from "@/app/components/svg/Burger";
import style from "./style.module.scss";

export default function Header() {
  const { portraitInView } = useStore();
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll();
  }, []);
  
  return (
    <header className={`${style.header} ${portraitInView ? style.header__portrait : ""}`}>
      <div className={style.header__logo}> <Logo/> </div>
      <div className={style.header__title}> Marcin Michał Marszałek </div>
      <div className={style.header__actions}>
        <a href="/"> <Button>Buy on Etsy</Button> </a>
        <span className={style.header__burger}>
          <Burger/>
          <div className={style.header__menu}>
            <a href="#home" onClick={() => locomotiveScroll.current?.scrollTo('#home')}>Home</a>
            <a href="#featured" onClick={() => locomotiveScroll.current?.scrollTo('#featured')}>Featured</a>
            <a href="#gallery" onClick={() => locomotiveScroll.current?.scrollTo('#gallery')}>Gallery</a>
            <a href="#about" onClick={() => locomotiveScroll.current?.scrollTo('#about')}>About</a>
            <a href="#contact" onClick={() => locomotiveScroll.current?.scrollTo('#contact')}>Contact</a>
          </div>
        </span>
      </div>
    </header>
  )
}