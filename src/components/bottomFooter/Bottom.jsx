import React from "react";
import cls from './Bottom.module.scss'
import icon from '../../assets/img/icon.png'
// import { FaTelegram } from 'react-icons/fa'
import  { 
          IoLogoVk,
          IoLogoFacebook,
          IoLogoInstagram,
          IoLogoTwitter,
          IoLogoWhatsapp,
          IoMailOutline,
          IoPaperPlaneOutline
        } from 'react-icons/io5'

export const Bottom = () => {
  return (
    <footer className={cls.footer}>

      <section className={cls.footer_section}>
        <div className={cls.footer_logo}>
          <img className={cls.logo_icon} src={icon} alt="logo" />
          <h1 className={cls.logo_text}>
            <span className={cls.logo_text_in}>Cat</span>
            <span>Money</span>
          </h1>
        </div>
        <p className={cls.footer_title}>Earn money with ease way</p>
      </section>

      <section className={cls.footer_section}>
        <div className={cls.footer_social}>
          <IoLogoVk className={cls.footer_social_icons} />
          <IoPaperPlaneOutline className={cls.footer_social_icons} />
          <IoLogoTwitter className={cls.footer_social_icons} />
          <IoLogoInstagram className={cls.footer_social_icons} />
          <IoLogoWhatsapp className={cls.footer_social_icons} />
          <IoMailOutline className={cls.footer_social_icons} />
        </div>
        <p className={cls.social_title}>Copyright Ⓒ 2023 S.A.SH</p>
      </section>

    </footer>
  )
}