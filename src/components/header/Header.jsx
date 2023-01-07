import React from "react";
import cls from './Header.module.scss'
import { IoPersonOutline, IoGlobeOutline, IoWalletOutline, IoCalendarNumberOutline } from "react-icons/io5"

export const Header = () => {
  const infoBlocks = [
    {
      id: 1,
      icon: <IoPersonOutline />,
      text: 'НАС УЖЕ:',
      number: 51477,
      other: 'ЧЕЛ',
    },
    {
      id: 2,
      icon: <IoGlobeOutline />,
      text: 'ОНЛАЙН:',
      number: 51477,
      other: 'ЧЕЛ',
    },
    {
      id: 3,
      icon: <IoWalletOutline />,
      text: 'ВЫПЛАЧЕНО:',
      number: 51477,
      other: 'РУБ',
    },
    {
      id: 4,
      icon: <IoCalendarNumberOutline />,
      text: 'РАБОТАЕМ:',
      number: 51477,
      other: 'ДНЕЙ',
    },
  ]

  return (
    <header className={cls.header}>
      <span className={cls.header__logo}>
        <img className={cls.header__logo_img} src="	https://serfclick.org/load/img/logo1.png" alt="logo" />
        <p className={cls.header__logo_text}>ЗАРАБОТОК БЕЗ ВЛОЖЕНИЙ</p>
      </span>
      <section className={cls.header__section}>
        {
          infoBlocks.map(item => (
            <div key={item.id} className={cls.header__section_info}>
              <span className={cls.info_icon}> {item.icon} </span>
              <p className={cls.info_text}> {item.text} </p>
              <span className={cls.info_number}> 
                {item.number} 
                <span className={cls.info_number_text}> {item.other} </span> 
              </span>
            </div>
          ))
        }
      </section>
    </header>
  )
}