import React from "react";
import cls from './Reset.module.scss'
import { useForm } from "react-hook-form";
import { Form } from '../../../helpers/form';
import { IoAtOutline } from 'react-icons/io5'
import { $api } from "../../../helpers/constant";

export const EmailSender = () => {
  const [active, setActive] = React.useState(false)

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      email: data.email
    }

    $api
      .post('/User/resetPassword', body)
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div className={cls.emailSender}>
      <h1 className={cls.header_title}>Сброс пароля</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.section}>
          <div className={cls.info_text}>
            Введите свой Email:
            {
              formState.errors.email && <span className={cls.root_error}> {formState.errors.email.message} </span>
            }
            {
              active && <span className={cls.root_error}> Такой пользователель не найден! </span>
            }
            <div className={cls.input_box}>
              <IoAtOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('email', Form.Options.email)}
              />
            </div>
          </div>
        <button className={cls.button}>Отправить</button>
      </form>
    </div>
  )
}