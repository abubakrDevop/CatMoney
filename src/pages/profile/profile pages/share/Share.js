import React from "react";
import cls from '../share/Share.module.scss'
import { IoCopyOutline } from "react-icons/io5"; 

export const Share = () => {
  return (
    <div className={cls.share}>
      <div className={cls.share_block}>
      <h1 className={cls.share_title}>Приглашай друзей</h1>
      <p className={cls.share_subtitle}>При переходе друга по данной ссылке и регистрации ты получаешь проценты от его выполненных задач также другие гарантированные призы!</p>
      <div className={cls.share_link}>
        <p> Тут появиться ссылка </p>
        <button className={cls.share_button}>
          <IoCopyOutline className={cls.share_icon}/>
        </button>
      </div>
      </div>
    </div>
  )
}