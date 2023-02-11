import React from "react";
import cls from '../signIn/SignIn.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form/index'
import axios from "axios";
import  {  
          IoEyeOffOutline,
          IoEyeOutline,
          IoLockClosedOutline,
          IoPersonOutline,
        } from 'react-icons/io5'

export const SignIn = () => {
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
      password: data.password,
    }

    axios.post('multipart/form-data/api/v2/auth', body)
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
        <h1 className={cls.headtitle}>Вход</h1>

        {
          formState.errors.login && <span className={cls.root_error}> {formState.errors.login.message} </span>
        }

        <div className={cls.form_inputbox}>
          <IoPersonOutline className={cls.input_icon} />
          <input 
            className={cls.form_input} 
            type="text" 
            placeholder="Введите логин..."
            {...register('login', Form.Options.allInputs)}
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
            placeholder="Введите пароль..."
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

        <button type="submit" className={cls.root__button}>Войти</button>
        <p className={cls.title}>Продолжая вы даете согласие на обработку персональных данных!</p>

      </form>
  )
}