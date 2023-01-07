import React from "react";
import cls from './Main.module.scss'
import { Link, Routes, Route } from 'react-router-dom'
import  { IoHomeOutline, 
          IoPersonOutline, 
          IoLogInOutline, 
          IoLogOutOutline, 
          IoChatbubblesOutline,
          IoLogoOctocat,
          IoReaderOutline,
        } from "react-icons/io5"
import { Home } from "../../pages/home/Home";
import { Profil } from "../../pages/profil/Profil";
import { SignUp } from "../../pages/register/signUp/SignUp";
import { SignIn } from "../../pages/register/signIn/SignIn";

export const Main = () => {
  const buttonItems = [
    {
      id: 1,
      to: 'home',
      icon: <IoHomeOutline />,
      text: 'ГЛАВНАЯ',
    },
    {
      id: 2,
      to: 'profil',
      icon: <IoPersonOutline />,
      text: 'ПРОФИЛЬ',
    },
    {
      id: 3,
      to: 'register',
      icon: <IoLogInOutline />,
      text: 'РЕГИСТРАЦИЯ',
    },
    {
      id: 4,
      to: 'support',
      icon: <IoChatbubblesOutline />,
      text: 'ПОДДЕРЖКА',
    },
    {
      id: 5,
      to: 'about us',
      icon: <IoLogoOctocat />,
      text: 'О КОМПАНИИ',
    },
    {
      id: 6,
      to: 'rules',
      icon: <IoReaderOutline />,
      text: 'ПРАВИЛА',
    },
  ]

  return (
    <main className={cls.main}>
      <section className={cls.main__section}>
        {
          buttonItems.map(item => (
            <Link to={item.to} key={item.id} className={cls.section_button}>
              <span className={cls.section_button_icon}> {item.icon} </span>
              <p className={cls.section_button_text}>{item.text}</p>
            </Link>
          ))
        }
      </section>
      <section className={cls.main__section}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
        </Routes>
      </section>
    </main>
  )
}