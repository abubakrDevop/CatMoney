import React from "react";
import cls from './Reset.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form'
import  { IoLockClosedOutline,
          IoLockOpenOutline,
          IoEyeOutline,
          IoEyeOffOutline,
        } from 'react-icons/io5'

export const Reset = () => {
  const [active, setActive] = React.useState(false)
  const userId = JSON.parse(localStorage.getItem("regist"));

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      password: data.password1,
      emailCod: data.emailCod,
      userId: userId,
    }

    if (data.password1 === data.password2) {
      // $api
        // .post("", body)
        // .then(res => {})
        // .catch(res => {});
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.reset}>
      <section className={cls.reset_headsection}>
        <section className={cls.reset_info}>
          <p className={cls.info_text}>
            Введите новый пароль:
            {
              formState.errors.password1 && <span className={cls.root_error}> {formState.errors.password1.message} </span>
            }
            {
              active && <span className={cls.root_error}> Пароли не совподают! </span>
            }
            <input
              className={cls.info_text_input}

              {...register('password1', Form.Options.password)}
            />
          </p>
          <p className={cls.info_text}>
            Повторите новый пароль:
            {
              formState.errors.password2 && <span className={cls.root_error}> {formState.errors.password2.message} </span>
            }
            <input
              className={cls.info_text_input}

              {...register('password2', Form.Options.password)}
            />
          </p>
          <p className={cls.info_text}>
            Введите код:
            {
              formState.errors.emailCod && <span className={cls.root_error}> {formState.errors.emailCod.message} </span>
            }
            <input
              className={cls.info_text_input}

              {...register('emailCod', Form.Options.emailCod)}
            />
          </p>
          <button type="submit" className={cls.reset_changeinfo}>Изменить пароль</button>
        </section>
      </section>
    </form>
  )
}