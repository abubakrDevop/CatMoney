import React from "react";
import cls from '../404-page/Page_404.module.scss'

export const Page_404 = () => {
  return (
    <div className={cls.page_404}>
      <h1 className={cls.page_404_headtitle}>Войдите в аккаунт или зарегистрируйтесь!</h1>
      <h1 className={cls.page_404_headtitle}>-- PLEASE REGISTER FIRST --</h1>
    </div>
  )
}