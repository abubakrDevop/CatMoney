import React from "react";
import cls from '../chat/Chat.module.scss'
import  { IoPaperPlaneOutline } from 'react-icons/io5'

export const Chat = () => {
  return (
    <div className={cls.chat}>
      <div className={cls.chat_block}>
        <div className={cls.icon_box}>
          <IoPaperPlaneOutline className={cls.icon} />
        </div>
        <h1 className={cls.chat_title}> Tex.Поддержка! </h1>
        <a href="https://web.telegram.org/z/#5650917804" className={cls.chat_button}> Написать </a>
      </div>
    </div>
  )
}