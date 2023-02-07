import React from "react";
import cls from '../tasks/Tasks.module.scss'

export const Tasks = () => {
  
  if (localStorage.getItem('registered') !== true) {
    return (
      <div className={cls.tasks_404}>
        <h1 className={cls.tasks_headtitle}>Войдите в аккаунт или зарегистрируйтесь!</h1>
        <h1 className={cls.tasks_headtitle}>404 Not Found</h1>
      </div>
    )
  }

  return (
    <div className={cls.tasks}>

    </div>
  )
}