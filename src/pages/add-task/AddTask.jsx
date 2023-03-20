import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import axios from "axios";
import { FaEdit, FaLink, FaClock, FaRubleSign } from "react-icons/fa";

import { Form } from '../../helpers/form/index'
import cls from '../add-task/AddTask.module.scss'

export const AddTask = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [visible, setVisible] = useState(false);

  const userId = JSON.parse(localStorage.getItem("regist"))

  const visiblePopap = () => {
    setVisible(!visible)
  }

  const taimer = [
    {
      title: "Таймер: 5 секунд",
      price: 0.07
    },
    {
      title: "Таймер: 10 секунд",
      price: 0.08
    },
    {
      title: "Таймер: 15 секунд",
      price: 0.09
    },
    {
      title: "Таймер: 20 секунд",
      price: 0.10
    },
    {
      title: "Таймер: 25 секунд",
      price: 0.11
    },
  ]
  
  const activeLabel = taimer[activeItem].title
  const taimerNumber = taimer[activeItem].title.split(' ')[1];
  const activePrice = taimer[activeItem].price;

  const {
    reset,
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = (data) => {
    const body = {
      description: data.title,
      url: data.url,
      timer: +taimerNumber,
      price: activePrice,
      id: userId.id
    };

    console.log('body', body)

    axios
      .post("https://8262-80-94-250-38.eu.ngrok.io/api/v2/addTask", body)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "200") {
          reset();
          alert("Задание получено")
        } else if (res.data.status === "") {
          reset();
        } else if (res.data.status === "") {
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onSelectItem = (index) => {
    setActiveItem(index)
    setVisible(!visible);
  }

  return (
    <div className={cls.add_task}>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.add_task_form}>
        <section className={cls.add_task_form_info}>
          <p className={cls.info_text}>
            Опишите задачу:
            <span className={cls.info_text_box}>
              <FaEdit className={cls.info_icon} />
              <input
                className={cls.info_text_input}
                {...register("title", Form.Options.settings)}
              />
            </span>
          </p>
          <p className={cls.info_text}>
            Ваша ссылка для перехода:
            <span className={cls.info_text_box}>
              <FaLink className={cls.info_icon} />
              <input
                className={cls.info_text_input}
                {...register("url", Form.Options.settings)}
              />
            </span>
          </p>

          <section className={cls.info_select_section}>
          <div className={cls.info_select}>
            Выбрать таймер:
            <button onClick={visiblePopap} className={cls.select_button}>
              {activeLabel}
            </button>
            <FaClock className={cls.info_select_icon} />
            {visible && (
              <div className={cls.select_popap}>
                {taimer.map((item, index) => (
                  <span
                    onClick={() => onSelectItem(index)}
                    key={index}
                    className={
                      activeItem === index
                        ? cls.popap_link_active
                        : cls.popap_link
                    }
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={cls.info_price}>
            Цена 1 перехода:
            <span>
              <span className={cls.info_price_size}>{activePrice}</span> ₽уб
            </span>
            <FaRubleSign className={cls.info_price_icon} />
          </div>
          </section>

          <button type="submit" className={cls.add_task_form_changeinfo}>
            Добавить задание
          </button>
        </section>
      </form>
    </div>
  );
}