import React from "react";
import cls from '../statistics/Statistics.module.scss'

export const Statistics = () => {
  if (localStorage.getItem('registered') !== 'ok') {
    return (
      <div className={cls.statistics_404}>
        <h1 className={cls.statistics_headtitle}>Войдите в аккаунт или зарегистрируйтесь!</h1>
        <h1 className={cls.statistics_headtitle}>404 Not Found</h1>
      </div>
    )
  }

  return (
    <div className={cls.statistics}> 

    </div>
  )
}