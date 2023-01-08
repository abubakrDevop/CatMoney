import React from "react";
import cls from '../signUp/SignUp.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form/index'
import  { 
  IoPersonOutline, 
  IoLockClosedOutline,
  IoEye,
  IoEyeOff,
} from "react-icons/io5"

export const SignIn = () => {
  const [active, setActive] = React.useState(false)

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {

  }

  return (
    <div className={cls.signup}>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit())}>
        <div className={cls.form__headtitle}>ФОРМА ЗАПОЛНЕНИЯ ДАННЫХ</div>
        <h1 className={cls.form__title}>АВТОРИЗАЦИЯ</h1>

        {
          formState.errors.login && <span className={cls.error}> {formState.errors.login.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoPersonOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder="Введите логин..." 
            {...register('login', Form.Options.allInputs)}
          />
        </div>

        {
          formState.errors.password && <span className={cls.error}> {formState.errors.password.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={active === true ? 'text' : 'password'} 
            placeholder="Введите пароль..." 
            {...register('password', Form.Options.password)}
          />
          <span onClick={() => {setActive(prev => !prev)}} className={cls.show_hide}>
            {
              active === false ? <IoEye /> : <IoEyeOff />
            }
          </span>
        </div>

        <button className={cls.button} type='submit'>ВОЙТИ</button>
        <Link className={cls.link} to={'/register'}>Нет аккаунта? Нажмите чтобы зарегистрироваться!</Link>
        <span className={cls.text}>------- ИЛИ -------</span>

        {
          //МЕСТО ДЛЯ ЛОГИНА С ПОМОШЬЮ ВК И ГУГЛ
        }
      </form>
    </div>
  )
}