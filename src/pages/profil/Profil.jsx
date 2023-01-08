import React from "react";
import cls from '../profil/Profil.module.scss'
import { Link } from 'react-router-dom'

export const Profil = () => {
  return (
    <div className={cls.profil}>
      <section className={cls.profil__section}>
        <div className={cls.section_block}>
          <img className={cls.block_img} src="https://img.freepik.com/free-psd/company-profile-cover-design-template_237398-416.jpg?w=2000" alt="avatar" />
          <h1 className={cls.block_name}>Alex Kendal</h1>
          <div className={cls.block_info}>Ваш логин: <span>Не известно</span></div>
          <div className={cls.block_info}>Ваш email: <span>Не известно</span></div>
          <div className={cls.block_info}>Ваш пароль: <span>Не известно</span></div>
          <Link to={''} className={cls.block_button} >Редактировать профиль</Link>
        </div>
      </section>
      <section className={cls.profil__section}>
        <div className={cls.section_block}>
          <h1>Ваш баланс</h1>
          <h1 className={cls.block_info}>0.00$</h1>
          <section className={cls.block_buttons}>
            <button className={cls.block_button}>Пополнить</button>
            <button className={cls.block_button}>Вывести</button>
          </section>
        </div>
        <div className={cls.section_block}>
          
        </div>
      </section>
    </div>
  )
}