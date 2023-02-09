import React from "react";
import cls from '../tasks/Tasks.module.scss'
import { Link } from "react-router-dom";

export const Tasks = () => {
  
  if (localStorage.getItem('registered') !== 'ok') {
    return (
      <div className={cls.tasks_404}>
        <h1 className={cls.tasks_headtitle}>Войдите в аккаунт или зарегистрируйтесь!</h1>
        <h1 className={cls.tasks_headtitle}>404 Not Found</h1>
      </div>
    )
  }

  return (
    <div className={cls.tasks}>
      <div className={cls.tasks_container}>

        <section className={cls.tasks_header}>
          {
            localStorage.getItem('Premium') !== true ? 
            <h1 className={cls.tasks_headtitle}>
              Тариф:
              <span className={cls.tasks_classic}> Classic </span>
              Купите премиум чтобы получать X2 монет!
            </h1>
            :
            <h1 className={cls.tasks_headtitle}>
              Тариф:
              <span className={cls.tasks_premium}> Premium </span>
              У вас режим X2 монет!
            </h1>
          }  

          <Link to={'/add-task'} className={cls.header_button}>Добавить задание</Link>
        </section>

        <section className={cls.tasks_inner}>
          
        </section>

      </div>
    </div>
  )
}