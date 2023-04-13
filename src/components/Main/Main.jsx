import React from "react";
import cls from '../Main/Main.module.scss'
import { IoChevronDownOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
// import axios from "axios";

export const Main = () => {

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

  // useEffect(() => {
  // axios.get('http://localhost:5000/api/v1/counter')
  //   .then(res => {
  //     console.log(res.data)
  //     setUsersValues(res.data)
  //   })
  //   .catch(error => console.log(error))
  // }, [])

  return (
    <main className={cls.main}>
      <section className={cls.main__block}>
        <div className={cls.main__info}>
          <p className={cls.main__title}>Начните зарабатывать вместе с нами!</p>
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
        </div>

        <div className={cls.main__statistics}>
          {
            data.map(item => (
              <div key={item.id} className={cls.statistics_card}>
                
              </div>
            ))
          }
        </div>
      </section>

      <section className={cls.main__section}>
        <IoChevronDownOutline className={cls.scroll_icon} />
        <IoChevronDownOutline className={cls.scroll_icon} />
      </section>
    </main>
  );
}