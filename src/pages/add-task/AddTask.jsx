import React from "react";
import { useForm } from 'react-hook-form'
import axios from "axios";

import { Form } from '../../helpers/form/index'
import cls from '../add-task/AddTask.module.scss'

export const AddTask = () => {

  const {
    reset,
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = (data) => {
    const body = {
      title: data.title,
      url: data.url,
      price: data.price,
    }

    axios.post('https://088a-80-94-250-40.eu.ngrok.io/api/v2/settings', body)
      .then(res => {
        console.log(res)
        if (res.data.status === '') {
          reset()
        } else if (res.data.status === '') {
          reset()
        } else if (res.data.status === '') {
          reset()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className={cls.add_task}>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.add_task_form}>
        <section className={cls.add_task_form_info}>
          <p className={cls.info_text}>
             Название вашей ссылки:
            <input
              className={cls.info_text_input}

              {...register('title', Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Ваша ссылка:
            <input
              className={cls.info_text_input}

              {...register('url', Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Цена 1 перехода:
            <input
              className={cls.info_text_input}

              {...register('price', Form.Options.settings)}
            />
          </p>
          <button type="submit" className={cls.add_task_form_changeinfo}>Добавить ссылку</button>
        </section>
    </form>
    </div>
  )
}