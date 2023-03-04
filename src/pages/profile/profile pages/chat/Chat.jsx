import React from "react";
import cls from '../chat/Chat.module.scss'
import  { IoPaperPlaneOutline } from 'react-icons/io5'

export const Chat = () => {

  return (
    <section className={cls.ownspace}>
      <section className={cls.ownspace_section}>
        <img
            className={cls.section_img}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="img"
          />
        </section>
        <section className={cls.ownspace_telegramBot}>
          <div className={cls.telegramBot_block}>
          <span className={cls.telegramBot_title}>Техническая поддержка:</span>
          <a href="https://github.com/abubakrDevop/CatMoney" className={cls.telegramBot_link}>
            <IoPaperPlaneOutline className={cls.telegramBot_icon}/>
            <span className={cls.telegramBot_text}>Телеграмм</span>
          </a>
          </div>
        </section>
      </section>
  )
}