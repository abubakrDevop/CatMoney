import React from "react";
import cls from './Reset.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form'
import { baseURL, $api } from '../../../helpers/constant'
import { useNavigate } from "react-router";
import  { IoLockClosedOutline,
          IoLockOpenOutline,
          IoEyeOutline,
          IoEyeOffOutline,
        } from 'react-icons/io5'

export const Reset = () => {
  const [active, setActive] = React.useState(false)
  const [resError, setResError] = React.useState(false)

  const userId = JSON.parse(localStorage.getItem("regist"));

  let navigate = useNavigate();

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      newPassword: data.password1,
      code: data.emailCod,
      userId: userId.id,
    }

    if (data.password1 === data.password2) {
      $api
        .post("/User/resetPassword", body)
        .then(res => {
          if (res.status >= 200 && res.status <= 2010) {
            reset()
            navigate('/profile/own-space')
          } else {
            reset()
          }
        })
        .catch(error => {
          if (error.response.status === 400) {
            setResError(true)
          } else if (error.response.status === 401) {
            alert('Пройдите верификацию, это сделано для безопасности вашего аккаунта от злоумышленников!')
            navigate('/resgister')
          }
        });
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
              active && <span className={cls.root_error}> Пароли не совпадают! </span>
            }
            <div className={cls.input_box}>
              <IoLockClosedOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('password1', Form.Options.password)}
              />
            </div>
          </p>
          <p className={cls.info_text}>
            Повторите новый пароль:
            {
              formState.errors.password2 && <span className={cls.root_error}> {formState.errors.password2.message} </span>
            }
            <div className={cls.input_box}>
              <IoLockClosedOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('password2', Form.Options.password)}
              />
            </div>
          </p>
          <p className={cls.info_text}>
            Введите код из почты Email:
            {
              formState.errors.emailCod && <span className={cls.root_error}> {formState.errors.emailCod.message} </span>
            }
            {
              resError && <span className={cls.root_error}> Неверный код! </span>
            }
            <div className={cls.input_box}>
              <IoLockClosedOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('emailCod', Form.Options.emailCod)}
              />
            </div>
          </p>
          <button type="submit" className={cls.reset_changeinfo}>Изменить пароль</button>
        </section>
      </section>
    </form>
  )
}