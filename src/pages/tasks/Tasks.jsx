import React, { useEffect, useState } from "react";
import { $api, baseURL } from '../../helpers/constant/index'
import cls from '../tasks/Tasks.module.scss'
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Page_404 } from "../404-page/Page_404";
import { Button } from '../../components/small components/button/Button'
import { Section } from "../../components/small components/section/Section";
import { IoChevronForwardOutline } from 'react-icons/io5'
import axios from "axios";

export const Tasks = () => {
  const [count, setCount] = useState(1)
  const [active, setActive] = useState(false)

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

  const userId = JSON.parse(localStorage.getItem("regist"));

    useEffect(() => {
      if (count >= 1) {
        axios
        .get(`http://localhost:5000/Task/tasks/${count}/${userId.id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((res) => {
          console.log(res);
          if (res.data.status === 404) {
            alert("Больше нет страниц")
          }
        });
      }

    }, [count]);

    function increment() {
      setCount(count + 1);
    }
    function decrement() {
      if (count > 1) {
        setCount(count - 1);
      }
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
      {iframe > '' && <div className={cls.timer}> {timeLeft} </div>}
      <div className={cls.tasks_container}>
        <Section display='flex' justify='space-between' padding='0 0 10px 0' className={cls.tasks_header}>
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

          <Section display='flex' justify='space-between' align='center' className={cls.tasks_header_box}>
            <div 
              className={active === true ? `${cls.search_box} ${cls.search_box_active}` : cls.search_box} 
              onClick={() => setActive(true)}
            >
              <div className={active === true ? `${cls.search_apear_item} ${cls.apear_item_active}` : cls.search_apear_item}></div>
              <div className={active === true ? `${cls.search_apear_item} ${cls.apear_item_active}` : cls.search_apear_item}></div>
              <input className={active === true ? `${cls.search_input} ${cls.search_input_active}` : cls.search_input} type="text" placeholder="Поиск задании..." />
            </div>
            <Link to={"/add-task"} className={cls.header_button}>
              Добавить задание
            </Link>
          </Section>
        </Section>

        <Section className={cls.tasks_inner}>
          {data.map((item) => (
            <div key={item.id} className={cls.task}>
              <Section display='flex' align='center' overflow='hidden' className={cls.task_imgname}>
                {/* <img src={item.img} alt="img" className={cls.task_img} /> */}
                <p className={cls.task_name}>{item.name}</p>
              </Section>

              <Section display='flex' width='70%' gap='10px' className={cls.task_info}>
                <p className={cls.task_title}>{item.description}</p>
                <div className={cls.task_price}>{item.price} ₽уб</div>
              </Section>

              <Section width='25%' display='flex' align='center' justify='space-between' className={cls.task_buttons} onClick={() => {
                handleIframe({
                  link: item.url,
                  timer: item.timer
                })
              }}>
                <Button width='70%' height='35px'>Выполнить</Button>
                <div className={cls.task_clock_icon}>{item.icon} {item.timer} сек</div>
              </Section>
            </div>
          ))}
        </Section>
        <Section width='100%' padding='25px 0 0 0' display='flex' align='center' justify='space-between' className={cls.navigator_btn_box}>
          <Button padding='0 20px' color='black' height='35px' back='white' className={cls.navigator_btn} onClick={decrement}>
            <IoChevronForwardOutline className={cls.navigator_icon1} />
          </Button>
          <Button padding='0 20px' color='black' height='35px' back='white' className={cls.navigator_btn} onClick={increment}>
            <IoChevronForwardOutline className={cls.navigator_icon2} />
          </Button>
        </Section>
      </div>
    </div>
  );
}