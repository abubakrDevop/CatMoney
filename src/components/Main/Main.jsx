import React, { useState, useEffect } from "react";
import cls from '../Main/Main.module.scss'
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch()

  const userId = JSON.parse(localStorage.getItem("regist"));

  useEffect(() => {
  axios.get('http://localhost:5000/Counter/count')
    .then(res => {
      console.log(res.data)
      setUsersValues(res.data)
    })
    .catch(error => console.log(error))

  axios.get(`http://localhost:5000/Task/user/${userId?.id}`)
    .then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        dispatch({type: 'add_userData', payload: res.data.user})
      }
    })
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
          Сайт CatMoney.com предлагает вам заработать или раскрутить свой сайт:
           комментарии, отзывы, форумы, доски объявлений. Продвижение в социальных сетях: 
           подписчики в группы, лайки, репосты. Продвижение приложений групп или любого 
           другого бизнеса. После регистрации вам необходимо указать кошелек в настройках
            и вы сможете спокойно начать зарабатывать или раскручивать свои сервисы. На данный момент
             времени это демо версия сайта и из основного функционала здесь.
            {/* Быстрый доход, мгновеные выплаты. Мы стараемся помочь людям как
            второ источник пасивного дохода, на нашем сайте ежедневно
            обновляються задания что дает быстро заработать первые деньги.
            Покупая
            <span className={cls.main__des_in}> премиум </span>
            вы получаете дополнительные x2 монет, плюшки и бонусы :D */}
          </p>
          <Link to={'/tasks'} className={cls.main__button}>Перейти к заданиям</Link>
        </AnimItem>
        <AnimItem className={cls.main__statistics} noHide={true} >
          {/* {
            userValues.map(item => ( */}
              <div className={cls.statistics_card}>
                  <IoPlanetOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Oнлайн: </span>
                  <span className={cls.card_numbers}>{userValues.usersOnline}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoPeopleOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Пользователей: </span>
                  <span className={cls.card_numbers}>{userValues.allUsers}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoWalletOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Выплаты: </span>
                  <span className={cls.card_numbers}>{userValues.allPayments}</span>
              </div>
              <div className={cls.statistics_card}>
                  <IoCalendarOutline className={cls.card_icon} />
                  <span className={cls.card_title}>Работаем: </span>
                  <span className={cls.card_numbers}>{userValues.workingDays} день(ей)</span>
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