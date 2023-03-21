import React, { useEffect, useState } from "react";
import axios from "axios";
import cls from '../tasks/Tasks.module.scss'
import { Link } from "react-router-dom";
import { IoTrashOutline } from 'react-icons/io5'
import { Page_404 } from "../404-page/Page_404";
import { PageTasks } from "./PageTasks"

export const Tasks = () => {
  const [items, setItems] = useState([])
  console.log("items", items)


  let tasks = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'Alex Kendal',
      price: '1.40',
      title: 'Зарегистрироваться на сайте',
      link: '',
      icon: <IoTrashOutline />,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'Misha Kolins',
      price: '2.23',
      title: 'Поставить лайк и оставить коментарии',
      link: '',
      icon: <IoTrashOutline />,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'Jensen Ackels',
      price: '0.99',
      title: 'Зарегистрироваться на сайте',
      link: '',
      icon: <IoTrashOutline />,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'Sasha Gray',
      price: '1.59',
      title: 'Поставить лайк и оставить коментарии',
      link: '',
      icon: <IoTrashOutline />,
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'Jorge Bush',
      price: '0.66',
      title: 'Зарегистрироваться на сайте',
      link: '',
      icon: <IoTrashOutline />,
    },
  ]

 const data = items.length > 0 ? items : tasks

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tasks")
      .then((res) => {
        console.log(res.data);
        setItems(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (localStorage.getItem('registered') !== 'ok') {
    return (
      <Page_404 />
    )
  }

  // Description: "Description";
  // Price: 0.07;
  // Timer: 5;
  // URL: "testURL";
  // Users_id: 2;
  // created_at: "2023-03-18T20:07:17.000000Z";
  // id: 1;
  // updated_at: "2023-03-18T20:07:17.000000Z";

  return (
    <div className={cls.tasks}>
      <div className={cls.tasks_container}>
        <section className={cls.tasks_header}>
          {localStorage.getItem("Premium") !== true ? (
            <h1 className={cls.tasks_headtitle}>
              Тариф:
              <span className={cls.tasks_classic}> Classic </span>
              Купите премиум чтобы получать X2 монет!
            </h1>
          ) : (
            <h1 className={cls.tasks_headtitle}>
              Тариф:
              <span className={cls.tasks_premium}> Premium </span>У вас режим X2
              монет!
            </h1>
          )}

          <Link to={"/add-task"} className={cls.header_button}>
            Добавить задание
          </Link>
        </section>

        <section className={cls.tasks_inner}>
          {data.map((item) => (
            <div key={item.id} className={cls.task}>
              <section className={cls.task_imgname}>
                {/* <img src={item.img} alt="img" className={cls.task_img} /> */}
                <p className={cls.task_name}>{item.name}</p>
              </section>

              <section className={cls.task_info}>
                <p className={cls.task_title}>{item.Description}</p>
                <div className={cls.task_price}>{item.Price} ₽уб</div>
              </section>

              <section className={cls.task_buttons}>
                <a href={item.URL} className={cls.task_button1}>
                  Выполнить
                </a>
                <button className={cls.task_button2}>{item.icon}</button>
              </section>
            </div>
          ))}
        </section>
        <PageTasks />
      </div>
    </div>
  );
}