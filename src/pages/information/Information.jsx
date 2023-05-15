import React from "react";
import cls from '../information/Information.module.scss'

export const Information = () => {
  return (
    <div className={cls.information}>
      <section className={cls.information_section}>
        <h1 className={cls.section_head_title}>Конфиденциальность</h1>
        <p className={cls.section_title}>
          Мы не храним ваш пароль в базе, поэтому обязательно сохраните его в надёжном месте. В том случае, если вы забыли пароль, вы можете попробовать восстановить его, если вы подозреваете что ваш аккаунт взломали, напишите нам в поддержку.
        </p>
      </section>
      <section className={cls.information_section}>
        <h1 className={cls.section_head_title}>Как это работает?</h1>
        <p className={cls.section_title}>
          Вы можете выполнять задания и получать за это деньги, чтобы у вас не было проблем мы описали правила
        </p>

        <ul className={cls.section_ul}>
          <li className={cls.section_li}>
            Для начала вам нужно подключить один из доступных кошельков в вашем профиле (ссылка в профиль) чтобы получать деньги за выполнение заданий
          </li>
          <li className={cls.section_li}>
            В каждом задании есть таймер, при нажатии на кнопку "выполнить", вы должны находиться на сайте заказчика установленый им промежуток времени. После на ваш счёт поступять указанные денежные средства
          </li >
          <li className={cls.section_li}>
            В профиле вы можете вывести свои средства на указаный в настройках кошелёк
          </li>
        </ul>

        <p className={cls.section_title}>Для тех кто создаёт задания!</p>

        <ul className={cls.section_ul}>
          <li className={cls.section_li}>
            Чтобы создавать задание на вашем счёту должно быть не меньше 3 рублей
          </li>
          <li className={cls.section_li}>
            В вашем профиле будут отображены все созданные вами задания, где вы можете редактировать их
          </li>
          <li className={cls.section_li}>
            Цена за переход определяется автоматически согласно выставленному времени выполнения серфинга
          </li>
        </ul>
      </section>
    </div>
  )
}