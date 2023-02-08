import React from "react";
import cls from '../Main/Main.module.scss'
import { IoChevronDownOutline } from 'react-icons/io5'

export const Main = () => {
  return (
    <main className={cls.main}>
      <p className={cls.main__title}>Начните зарабатывать вместе с нами!</p>
      <h1 className={cls.main__headtitle}>Выполняйте задания <br /> Выводите деньги</h1>
      <p className={cls.main__description}>Быстрый доход, мгновеные выплаты. Мы стараемся помочь людям как второ источник пасивного дохода, на нашем сайте ежедневно обновляються задания что дает быстро заработать первые деньги. Покупая 
        <span className={cls.main__des_in}> премиум </span> 
      вы получаете дополнительные x2 монет, плюшки и бонусы :D
      </p>
      <button className={cls.main__button}>Перейти к заданиям</button>

      <section className={cls.main__section}>
        <IoChevronDownOutline className={cls.scroll_icon} />
        <IoChevronDownOutline className={cls.scroll_icon} />
      </section>
    </main>
  )
}