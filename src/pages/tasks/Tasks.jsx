import React, { useEffect, useState } from "react";
import { $api, baseURL } from '../../helpers/constant/index'
import cls from '../tasks/Tasks.module.scss'
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Page_404 } from "../404-page/Page_404";
import { IoChevronForwardOutline } from 'react-icons/io5'
import axios from "axios";

export const Tasks = () => {
  const [count, setCount] = useState(1)

  const tasks = [
    {
      users_id: 1,
      name: "Alex Kendal",
      price: "1.40",
      description: "Зарегистрироваться на сайте",
      url: "https://www.youtube.com/",
      icon: <FaRegClock />,
      timer: 10000,
      id: 11,
    },
    {
      users_id: 2,
      name: "Misha Kolins",
      price: "2.23",
      description: "Поставить лайк и оставить коментарии",
      url: "https://www.youtube.com/",
      icon: <FaRegClock />,
      timer: 15000,
      id: 12,
    },
    {
      users_id: 3,
      name: "Jensen Ackels",
      price: "0.99",
      description: "Зарегистрироваться на сайте",
      url: "https://www.youtube.com/",
      icon: <FaRegClock />,
      timer: 7000,
      id: 13,
    },
    {
      users_id: 4,
      name: "Sasha Gray",
      price: "1.59",
      description: "Поставить лайк и оставить коментарии",
      url: "https://www.youtube.com/",
      icon: <FaRegClock />,
      timer: 8000,
      id: 14,
    },
    {
      users_id: 5,
      name: "Jorge Bush",
      price: "0.66",
      description: "Зарегистрироваться на сайте",
      url: "https://www.youtube.com/",
      icon: <FaRegClock />,
      timer: 6000,
      id: 15,
    },
  ];

  const [iframe, setIframe] = useState()
  const [timeLeft, setTimeLeft] = useState(0);
  const [data, setData] = useState(tasks)

    useEffect(() => {
      axios
        .get(`http://localhost:5000/Task/tasks/${count}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [count]);

    function increment() {
      setCount(count + 1);
    }
    function decrement() {
      setCount(count - 1);
    }

  const handleIframe = (data) => {
    setIframe(data.link)
    setTimeLeft(data.timer / 1000);
    setTimeout(() => {
      setIframe('')
      if (data.link) {
        window.open(data.link);
      }
    }, data.timer)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (localStorage.getItem('registered') !== 'ok') {
    return (
      <Page_404 />
    )
  }

  return (                                                                                                                                                                                                                                                                                                        
    <div className={cls.tasks}>
      <iframe src={iframe} className={iframe > '' ? cls.iframe_active : cls.iframe}></iframe>
      {iframe > '' && <div className={cls.timer}>
          {timeLeft}
        </div>}
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

          <section className={cls.tasks_header_box}>
            <div className={cls.search_box}>
              <input className={cls.search_input} type="text" placeholder="Поиск задании..." />
              <IoSearchOutline className={cls.search_icon} />
            </div>
            <Link to={"/add-task"} className={cls.header_button}>
              Добавить задание
            </Link>
          </section>
        </section>

        <section className={cls.tasks_inner}>
          {data.map((item) => (
            <div key={item.id} className={cls.task}>
              <section className={cls.task_imgname}>
                {/* <img src={item.img} alt="img" className={cls.task_img} /> */}
                <p className={cls.task_name}>{item.name}</p>
              </section>

              <section className={cls.task_info}>
                <p className={cls.task_title}>{item.description}</p>
                <div className={cls.task_price}>{item.price} ₽уб</div>
              </section>

              <section className={cls.task_buttons} onClick={() => {
                handleIframe({
                  link: item.url,
                  timer: item.timer
                })
              }}>
                <p className={cls.task_button1}>
                  Выполнить
                </p>
                <div className={cls.task_clock_icon}>{item.icon} {item.timer} сек</div>
              </section>
            </div>
          ))}
        </section>
        <section className={cls.navigator_btn_box}>
          <button  className={cls.navigator_btn} onClick={() => count !== 0 ? decrement : null}>
            <IoChevronForwardOutline className={cls.navigator_icon1} />
          </button>
          <button className={cls.navigator_btn} onClick={increment}>
            <IoChevronForwardOutline className={cls.navigator_icon2} />
          </button>
        </section>
      </div>
    </div>
  );
}