import React from "react";
import cls from '../signUp/SignUp.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form/index'
import axios from "axios";
import  { 
          IoAtOutline, 
          IoEyeOffOutline,
          IoEyeOutline,
          IoLockClosedOutline,
          IoPersonOutline,
        } from 'react-icons/io5'

export const SignUp = () => {
  const [active, setActive] = React.useState(false)

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      login: data.login,
      email: data.email,
      password: data.password,
      mode: 1,
    }

    axios.post('https://sitename.com/multipart/form-data/api/v2/register', body)
      .then(res => {
        console.log(res)
        if (res.ok) {
          reset()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={cls.root__form}>
        <h1 className={cls.headtitle}>Регистрация</h1>

        {
          formState.errors.login && <span className={cls.root_error}> {formState.errors.login.message} </span>
        }

        <div className={cls.form_inputbox}>
          <IoPersonOutline className={cls.input_icon} />
          <input 
            className={cls.form_input} 
            type="text" 
            placeholder="Придумайте логин..."
            {...register('login', Form.Options.allInputs)}
          />
        </div>

        {
          formState.errors.email && <span className={cls.root_error}> {formState.errors.email.message} </span>
        }

        <div className={cls.form_inputbox}>
          <IoAtOutline className={cls.input_icon} />
          <input 
            className={cls.form_input} 
            type="email" 
            placeholder="Введите email..."
            {...register('email', Form.Options.email)}
          />
        </div>

        {
          formState.errors.password && <span className={cls.root_error}> {formState.errors.password.message} </span>
        }

        <div className={cls.form_inputbox}>
          <IoLockClosedOutline className={cls.input_icon} />
          <input 
            className={cls.form_input} 
            type={active === false ? 'password' : 'text'} 
            placeholder="Придумайте пароль..."
            {...register('password', Form.Options.password)}
          />
          {
            active === false ? 
            <IoEyeOffOutline 
              className={cls.input_eye} 
              onClick={() => setActive(true)} 
            />
            :
            <IoEyeOutline 
              className={cls.input_eye} 
              onClick={() => setActive(false)}
            />
          }
        </div>

        <button className={cls.root__button}>Зарегистрироваться</button>
        <p className={cls.title}>Продолжая вы даете согласие на обработку персональных данных!</p>

      </form>
  )
}