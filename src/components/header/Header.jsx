import React from "react";
import cls from '../header/Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  const links = [
    {
      id: 1,
      to: '',
      title: 'Главная',
    },
    {
      id: 2,
      to: '',
      title: 'Задания',
    },
    {
      id: 3,
      to: '',
      title: 'Статистика',
    },
    {
      id: 4,
      to: '',
      title: 'Информация',
    },
    {
      id: 5,
      to: '',
      title: 'Контакты',
    },
  ]

  return (
    <header className={cls.header}>
      <img className={cls.header__logo} src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" alt="logo" />
      <section className={cls.header__section}>
        {
          links.map(item => (
            <Link to={''} key={item.id} className={cls.section__title}> {item.title} </Link>
          ))
        }
      </section>
    </header>
  )
}