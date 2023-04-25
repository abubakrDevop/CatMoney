import React from "react";
import cls from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import icon from '../../assets/img/icon.png'
import  {
          IoLogInOutline,
          IoLogOutOutline,
          IoGiftOutline,
          IoNotificationsOutline,
          IoMenuOutline,
          IoCloseOutline,
          IoPersonOutline
        } from 'react-icons/io5'

export const Header = () => {
  const [active, setActive] = React.useState(false)
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
      <section className={cls.header_logo}>
        <img className={cls.logo_icon} src={icon} alt="logo" />
        <h1 className={cls.logo_text}>
          <span className={cls.logo_text_in}>Cat</span>
          <span>Money</span>
        </h1>
      </section>

      <section
        className={
          active === true
            ? `${cls.header_mobile} ${cls.header_mobile_active}`
            : cls.header_mobile
        }
      >
        <section className={cls.header_titles}>
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => {
                setActive(false);
              }}
              className={
                location.pathname === item.to
                  ? cls.section__title__active
                  : cls.section__title
              }
            >
              {item.title}
            </Link>
          ))}
        </section>

        <section className={cls.header_section}>
          <div className={cls.header_info}>
            <IoGiftOutline className={cls.info_icon} />
            <IoNotificationsOutline className={cls.info_icon} />
            {localStorage.getItem("registered") !== "ok" ? (
              <span className={cls.profil_text_404}>Войдите в аккаунт!</span>
            ) : (
              <Link
                to={"/profile"}
                className={cls.header_profil}
                onClick={() => {setActive(false)}}
              >
                <IoPersonOutline className={cls.profil_icon} />
                <span className={cls.profil_text}>Alex Kendal</span>
              </Link>
            )}
          </div>

          <div className={cls.header_register}>
            {localStorage.getItem("registered") !== "ok" ? (
              <div className={cls.header_register_block}>
                <span className={cls.register_mobile_out}>Войти</span>
                <Link className={cls.header__icon} to={"/register"}>
                  <IoLogInOutline
                    onClick={() => {
                      // localStorage.setItem("registered", "ok");
                      // window.location.reload();
                    }}
                  />
                </Link>
              </div>
            ) : (
              <div className={cls.header_register_block}>
                <span className={cls.register_mobile_out}>Выйти</span>
                <IoLogOutOutline
                  className={cls.header__icon}
                  onClick={() => {
                    localStorage.setItem("registered", "error");
                    window.location.reload();
                  }}
                />
              </div>
            )}
          </div>
        </section>
      </section>

      {active === false ? (
        <IoMenuOutline
          className={cls.heade_mobile_icon1}
          onClick={() => setActive(true)}
        />
      ) : (
        <IoCloseOutline
          className={cls.heade_mobile_icon2}
          onClick={() => setActive(false)}
        />
      )}
    </header>
  );
}