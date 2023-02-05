import React from "react";
import cls from '../header/Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { IoPersonOutline, IoLogInOutline } from 'react-icons/io5'

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
    <header className={location.pathname !== '/' ? cls.header_active : cls.header}>
      <img className={cls.header__logo} src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" alt="logo" />
      <section className={cls.header__section}>
        {
          links.map(item => (
            <Link 
              to={item.to} 
              key={item.id} 
              className={location.pathname === item.to ? cls.section__title__active : cls.section__title}> 
              {item.title} 
            </Link>
          ))
        }
        {
          localStorage.getItem('registered') === true ?
          <Link to={'/profile'}><IoPersonOutline className={cls.header__icon} /></Link>
          :
          <Link to={'/register'}><IoLogInOutline className={cls.header__icon} /></Link>
        }
      </section>
    </header>
  )
}