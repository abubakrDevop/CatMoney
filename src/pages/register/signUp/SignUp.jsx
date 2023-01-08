import React from "react";
import cls from '../signUp/SignUp.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form/index'
import  { 
  IoPersonOutline, 
  IoLockClosedOutline,
  IoMailOutline,
  IoEye,
  IoEyeOff,
} from "react-icons/io5"

export const SignUp = () => {
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
        <h1 className={cls.form__title}>РЕГИСТРАЦИЯ</h1>

        {
          formState.errors.login && <span className={cls.error}> {formState.errors.login.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoPersonOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder="Создайте логин..." 
            {...register('login', Form.Options.allInputs)}
          />
        </div>

        {
          formState.errors.email && <span className={cls.error}> {formState.errors.email.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoMailOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder="Введите email..." 
            {...register('email', Form.Options.email)}
          />
        </div>

        {
          formState.errors.passwor1 && <span className={cls.error}> {formState.errors.passwor1.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={active === true ? 'text' : 'password'} 
            placeholder="Создайте пароль..." 
            {...register('passwor1', Form.Options.password)}
          />
          <span onClick={() => {setActive(prev => !prev)}} className={cls.show_hide}>
            {
              active === false ? <IoEye /> : <IoEyeOff />
            }
          </span>
        </div>

        {
          formState.errors.password2 && <span className={cls.error}> {formState.errors.password2.message} </span>
        }

        <div className={cls.form__input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={active === true ? 'text' : 'password'}  
            placeholder="Подтвердите пароль..." 
            {...register('password2', Form.Options.password)}
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