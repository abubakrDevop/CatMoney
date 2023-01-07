import React from "react";
import cls from '../signUp/SignUp.module.scss'
import { Link } from 'react-router-dom'
import  { 
  IoPersonOutline, 
  IoLockClosedOutline,
  IoMailOutline,
  IoEye,
  IoEyeOff,
} from "react-icons/io5"

export const SignUp = () => {
  const [active, setActive] = React.useState(false)

  return (
    <div className={cls.signup}>
      <form className={cls.form}>
        <div className={cls.form__headtitle}>ФОРМА ЗАПОЛНЕНИЯ ДАННЫХ</div>
        <h1 className={cls.form__title}>РЕГИСТРАЦИЯ</h1>

        <div className={cls.form__input_box}>
          <IoPersonOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder="Введите логин..." 
          />
        </div>

        <div className={cls.form__input_box}>
          <IoMailOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder="Введите email..." 
          />
        </div>

        <div className={cls.form__input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={active === true ? 'text' : 'password'} 
            placeholder="Введите пароль..." 
          />
          <span onClick={() => {setActive(prev => !prev)}} className={cls.show_hide}>
            {
              active === false ? <IoEye /> : <IoEyeOff />
            }
          </span>
        </div>

        <div className={cls.form__input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={active === true ? 'text' : 'password'}  
            placeholder="Подтвердите пароль..." 
          />
        </div>

        <button className={cls.button}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        <Link className={cls.link} to={'/login'}>Уже есть аккаунт? Нажмите чтобы войти!</Link>
        <span className={cls.text}>------- ИЛИ -------</span>

        {
          //МЕСТО ДЛЯ ЛОГИНА С ПОМОШЬЮ ВК И ГУГЛ
        }
      </form>
    </div>
  )
}