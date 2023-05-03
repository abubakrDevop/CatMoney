import React, { useState, useEffect } from "react";
import cls from '../Main/Main.module.scss'
import  { IoChevronDownOutline, 
          IoPlanetOutline,
          IoPeopleOutline, 
          IoWalletOutline, 
          IoCalendarOutline 
        } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import axios from "axios";

import AnimItem from "../AnimItem";

export const Main = () => {
  const [userValues, setUsersValues] = useState([])

  const data = [
    {
      id: 1,
      icon: '',
      text: '',
      number: '',
    },
    {
      id: 2,
      icon: '',
      text: '',
      number: '',
    },
    {
      id: 3,
      icon: '',
      text: '',
      number: '',
    },
    {
      id: 4,
      icon: '',
      text: '',
      number: '',
    },
  ]

  useEffect(() => {
  axios.get('http://localhost:5000/Counter/count')
    .then(res => {
      console.log(res.data)
      setUsersValues(res.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <main className={cls.main}>
      <section className={cls.main__block}>
        <AnimItem className={cls.main__info} noHide={true} >
          <p className={cls.main__title}>Начните зарабатывать легко!</p>
          <h1 className={cls.main__headtitle}>
            Выполняйте задания <br /> Выводите деньги
          </h1>
          <p className={cls.main__description}>
            Быстрый доход, мгновеные выплаты. Мы стараемся помочь людям как
            второ источник пасивного дохода, на нашем сайте ежедневно
            обновляються задания что дает быстро заработать первые деньги.
            Покупая
            <span className={cls.main__des_in}> премиум </span>
            вы получаете дополнительные x2 монет, плюшки и бонусы :D
          </p>
          <Link to={'/tasks'} className={cls.main__button}>Перейти к заданиям</Link>
        </AnimItem>
        <AnimItem className={cls.main__statistics} noHide={true} >
          {/* {
            userValues.map(item => ( */}
              <div className={cls.statistics_card}>
                  <IoPlanetOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Oнлайн:</span>
                  <span>{userValues.usersOnline}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoPeopleOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Пользователей:</span>
                  <span>{userValues.allUsers}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoWalletOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Выплаты:</span>
                  <span>{userValues.allPayments}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoCalendarOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Работаем:</span>
                  <span>{userValues.workingDays} день(ей)</span>
              </div>
          {/* } */}
        </AnimItem>
      </section>

      <section className={cls.main__section}>
        <IoChevronDownOutline className={cls.scroll_icon} />
        <IoChevronDownOutline className={cls.scroll_icon} />
      </section>
    </main>
  );
}