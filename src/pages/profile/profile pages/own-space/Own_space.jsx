import React from "react";
import cls from '../own-space/Own_space.module.scss'

export const Ownspace = () => {
  return (
    <div className={cls.ownspace}>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <img className={cls.section_img} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
          <section className={cls.section_namebox}>
            <div className={cls.ownspace_namebox_in}> Имя:
              <h1 className={cls.section_name}>В разработке!</h1>
            </div>
            <div className={cls.ownspace_namebox_in}> Фамилия:
              <h1 className={cls.section_name}>В разработке!</h1>
            </div>
          </section>
        </section>

        <section className={cls.ownspace_section}>
          <div className={cls.section_aboutbox}>
            <h1 className={cls.section_about}>Обо мне: в разработке!</h1>
          </div>
        </section>  
      </section>

      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_balance}>
          <h1 className={cls.balance_headtitle}>Баланс</h1>
          <h1 className={cls.balance_title}>0 ₽</h1>
          <section className={cls.ownspace_buttons}>
            <button className={cls.buttons_button}>Пополнить</button>
            <button className={cls.buttons_button}>Вывести</button>
          </section>
        </section>

        <section className={cls.ownspace_info}>
          <p className={cls.info_text}>Ваш логин: <span>данные отсутствуют!</span></p>
          <p className={cls.info_text}>Ваш email: <span>данные отсутствуют!</span></p>
          <p className={cls.info_text}>Ваш пароль: <span>данные отсутствуют!</span></p>
          <p className={cls.info_text}>Ваш кошелёк: <span>данные отсутствуют!</span></p>
          <p className={cls.info_text}>Ваш id пользователя: <span>данные отсутствуют!</span></p>
        </section>

        <button className={cls.ownspace_changeinfo}>Редактировать профиль</button>
      </section>
    </div>
  )
} 