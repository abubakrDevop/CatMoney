import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { FaEdit, FaLink, FaClock, FaRubleSign } from "react-icons/fa";
import { Form } from '../../helpers/form/index'
import cls from '../add-task/AddTask.module.scss'
import { $api } from "../../helpers/constant/index";

export const AddTask = ({ text, onClick, taskId, setUpdateTask }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false)

  const userId = JSON.parse(localStorage.getItem("regist"));

  const taimer = [
    {
      title: "Таймер: 5 секунд",
      price: 0.07,
    },
    {
      title: "Таймер: 10 секунд",
      price: 0.08,
    },
    {
      title: "Таймер: 15 секунд",
      price: 0.09,
    },
    {
      title: "Таймер: 20 секунд",
      price: 0.1,
    },
    {
      title: "Таймер: 25 секунд",
      price: 0.11,
    },
  ];

  const taimerValue = taimer[activeItem].title.split(" ")[1];
  const activePrice = taimer[activeItem].price;

  console.log('taimerValue', taimerValue, activePrice)

  const { 
    formState, 
    reset, 
    register, 
    handleSubmit 
  } = useForm();

  const onSubmit = (data) => {
    console.log("userId", userId.id);
    if (taskId) {
      onClick(false);
      const body = {
        description: data.title,
        url: data.url,
        timer: +taimerValue,
        price: +activePrice,
        userId: userId.id,
        taskId: taskId,
        balance: data.balance.length === '' ? 5 : +data.balance
      };

      $api
        .put("/Task/update", body)
        .then((res) => {
          console.log("updateTask", res.data);
          setUpdateTask(res.data);
          if (res.status === 200) {
            reset();
            alert("Задание получено");
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

    if (!taskId) {
      const body = {
        description: data.title,
        url: data.url,
        timer: +taimerValue,
        price: +activePrice,
        userId: userId.id,
        balance: data.balance === '' ? 5 : data.balance,
      };

      if (data.balance >= data.price) {
        $api
        .post("/Task/add", body)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            reset();
            alert("Задание получено");
          } else if (res.data.status === "") {
            reset();
          } else if (res.data.status === "") {
            reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
        setActive(false)
      } else {
        setActive(true)
      }
    }
  };

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setActiveItem(selectedIndex);
    setValue(event.target.value);
  };

  return (
    <div className={taskId ? `${cls.add_task_edit}` : `${cls.add_task}`}>
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

          <p className={cls.info_text}>
            Пополнить баланс задания:
            {
              formState.errors.balance && <span className={cls.task_error}> {formState.errors.balance.message} </span>
            }
            <span className={cls.info_text_box}>
              <FaRubleSign className={cls.info_icon} />
              <input
                className={cls.info_text_input}
                placeholder="По умолчанию 5₽"
                {...register("balance", Form.Options.numbers)}
              />
            </span>
          </p>

          <p className={cls.info_text}>
              Цена за переход:
              {
                formState.errors.price && <span className={cls.task_error}> {formState.errors.price.message} </span>
              }
              {
                active && <span className={cls.task_error}> Цена за переход не может превышать цену баланса!</span>
              }
              <span className={cls.info_text_box}>
                <FaRubleSign className={cls.info_icon} />
                <input
                  className={cls.info_text_input}
                  placeholder=""
                  {...register("price", Form.Options.numbers)}
                />
              </span>
            </p>

          <section className={cls.info_select_section}>
            <div className={cls.info_select}>
              Выбрать таймер:
              <div className={cls.select_block}>
                <FaClock className={cls.info_select_icon} />
                <select
                  className={cls.select_popap}
                  onChange={handleSelectChange}
                >
                  {taimer.map((item) => (
                    <option
                      className={cls.popap_link}
                      key={item.price}
                      value={item.price}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <button type="submit" className={cls.add_task_form_changeinfo}>
            {!text ? "Добавить задание" : text}
          </button>
        </section>
      </form>
    </div>
  );
};