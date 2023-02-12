import React from "react";
import cls from '../header/Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import  { 
          IoLogInOutline,
          IoLogOutOutline,
          IoGiftOutline,
          IoNotificationsOutline, 
        } from 'react-icons/io5'

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
      to: '/about-us',
      title: 'О нас!',
    },
  ]

  return (
    <header className={cls.header}>

      <img className={cls.header__logo} src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" alt="logo" />
      
      <section className={cls.header_titles}>
        {
          links.map(item => (
            <Link 
              key={item.id} 
              to={item.to} 
              className={location.pathname === item.to ? cls.section__title__active : cls.section__title} 
            > 
              {item.title} 
            </Link>
          ))
        }
      </section>

      <section className={cls.header_section}>
        <div className={cls.header_info}>
          <IoGiftOutline className={cls.info_icon} />
          <IoNotificationsOutline className={cls.info_icon} />
          {
            localStorage.getItem ('registered') !== "ok" ? 
            <span className={cls.profil_text_404}>Войдите в аккаунт!</span>
            :
            <Link to={'/profile'} className={cls.header_profil}>
              <img className={cls.profil_img} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
              <span className={cls.profil_text}>Alex Kendal</span>
            </Link>
          }
        </div>
  
        <div className={cls.header_register}>
          {
            localStorage.getItem('registered') !== 'ok' ?
            <Link className={cls.header__icon} to={'/register'}><IoLogInOutline onClick={() => {
              // localStorage.setItem('registered', 'ok')
              // window.location.reload()
            }}/></Link>
            :
            <IoLogOutOutline className={cls.header__icon} onClick={() => {
              localStorage.setItem('registered', 'error')
              window.location.reload()
            }} />
          }
        </div>
      </section>

    </header>
  )
}