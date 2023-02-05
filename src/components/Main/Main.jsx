import React from "react";
import cls from '../Main/Main.module.scss'
import { IoChevronDownOutline } from 'react-icons/io5'

export const Main = () => {
  return (
    <main className={cls.main}>
      <p className={cls.main__title}>Начать зарабатывать</p>
      <h1 className={cls.main__headtitle}>Мгновенный доход <br /> Быстрые выплаты</h1>
      <p className={cls.main__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas cupiditate quasi doloremque, architecto aliquid placeat exercitationem excepturi culpa dolorem doloribus corporis cumque suscipit voluptate dolor temporibus aliquam hic quidem!</p>
      <button className={cls.main__button}>Перейти к заданиям</button>

      <section className={cls.main__section}>
        <IoChevronDownOutline className={cls.scroll_icon} />
        <IoChevronDownOutline className={cls.scroll_icon} />
      </section>
    </main>
  )
}