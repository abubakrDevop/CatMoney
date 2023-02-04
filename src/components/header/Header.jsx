import React from "react";
import cls from '../header/Header.module.scss'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation();
  
  const links = [
    {
      id: 1,
      to: '/',
      title: 'Главная',
    },
    {
      id: 2,
      to: '/tasks',
      title: 'Задания',
    },
    {
      id: 3,
      to: '/statistics',
      title: 'Статистика',
    },
    {
      id: 4,
      to: '/information',
      title: 'Информация',
    },
    {
      id: 5,
      to: '/contacts',
      title: 'Контакты',
    },
  ]

  return (
    <header className={cls.header}>
      <img className={cls.header__logo} src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" alt="logo" />
      <section className={cls.header__section}>
        {
          links.map(item => (
            <Link to={item.to} key={item.id} className={cls.section__title} style={location.pathname === item.to ? {"color": "rgb(244, 66, 80)"} : null}> {item.title} </Link>
          ))
        }
      </section>
    </header>
  )
}