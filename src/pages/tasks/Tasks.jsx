import React, { useEffect, useState } from "react";
import { $api, baseURL } from "../../helpers/constant/index";
import cls from "../tasks/Tasks.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { FaRegClock } from "react-icons/fa";
import { Page_404 } from "../404-page/Page_404";
import { Button } from "../../components/small components/button/Button";
import { Section } from "../../components/small components/section/Section";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Tasks = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [selectedAsc, setSelectedAsc] = useState();

  const sort = [
    {
      title: "Сортировать:",
      value: "sort",
    },
    {
      title: "по возрастанию цены",
      value: "price",
      asc: false,
    },
    {
      title: "по убыванию цены",
      value: "price",
      asc: true,
    },
  ];

  const [iframe, setIframe] = useState();
  const [timeLeft, setTimeLeft] = useState(0);
  const [data, setData] = useState([]);
  const [countTasks, setCountTasks] = useState([]);

  const userId = JSON.parse(localStorage.getItem("regist"));

  useEffect(() => {
    if (count >= 1 || count < countTasks) {
      axios
        .get(`http://localhost:5000/Task/tasks/${count}/${userId?.id}`)
        .then((res) => {
          setData(res.data.tasks);
          setCountTasks(res.data.pagesCount);
        })
        .catch((res) => {});
    }
  }, [count]);

  function increment() {
    if (count < countTasks) {
      setCount(count + 1);
    }
    if (count >= countTasks) {
    }
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count === 1 || count < 2) {
    }
  }

  const handleSearch = (description) => {
    $api
      .get(
        `http://localhost:5000/Task/tasks/${description}/${count}/${userId?.id}`
      )
      .then((res) => {
        setData(res.data.tasks);
        setCountTasks(res.data.pagesCount);
        console.log(res);
      });
  };

  const handleSort = (asc, option) => {
    let option1 = "";

    if (option === "по возрастанию цены") {
      option1 = "price";
    } else if (option === "по убыванию цены") {
      option1 = "price";
    }
   console.log('option1', option1)
    $api
      .get(
        `http://localhost:5000/Task/tasks/${option1}/${asc}/${count}/${userId?.id}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.tasks);
        setCountTasks(res.data.pagesCount);
      });
  };

  const taskComplete = (body) => {
    $api.post("Task/complete", body);
  };

  const handleIframe = (data) => {
    setIframe(data.link);
    setTimeLeft(data.timer);
    setTimeout(() => {
      if (data.link) {
        window.open(data.link);
        $api.post("Task/complete", {
          userId: userId.id,
          taskId: data.taskId
        }).then((res) => {

        }).catch((err) => {
          if (err.response.status === 400) {
            alert("Перед тем как выполнять задания, нужно указать свой кошелёк в настройках")
          }
        });;
      }
    }, data.timer * 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


  if (localStorage.getItem("registered") !== "ok") {
    return <Page_404 />;
  }

 

  return (
    <div className={cls.tasks}>
      <iframe
        src={iframe}
        className={iframe > "" ? cls.iframe_active : cls.iframe}
      ></iframe>
      {iframe > "" && <div className={cls.timer}> {timeLeft} </div>}
      <div className={cls.tasks_container}>
        <Section
          display="flex"
          justify="space-between"
          padding="0 0 10px 0"
          className={cls.tasks_header}
        >
          {localStorage.getItem("Premium") !== true ? (
            <h1 className={cls.tasks_headtitle}>
              Подписка:
              <span className={cls.tasks_classic}> Classic </span>
              Купите премиум чтобы получать повышенный процент
            </h1>
          ) : (
            <h1 className={cls.tasks_headtitle}>
              Подписка:
              <span className={cls.tasks_premium}> Premium </span>
            </h1>
          )}

          <Section
            display="flex"
            direction="column"
            justify="space-between"
            align="center"
            className={cls.tasks_header_box}
          >
            <Section
              display="flex"
              justify="space-between"
              align="center"
              margin="0 0 5px 0"
              className={cls.tasks_header_sorts}
            >
              <div className={cls.search_box}>
                <input
                  className={cls.search_input}
                  type="search"
                  placeholder="Поиск заданий..."
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className={cls.select_box}>
                <select
                  className={cls.select}
                  onChange={(e) => {
                    return handleSort(
                      e.target.value,
                      e.target.options[e.target.selectedIndex].label
                    );
                  }}
                >
                  {sort.map((item) => (
                    <option
                      key={item.title}
                      className={cls.option}
                      value={item.asc}
                      label={item.title}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </Section>
            <Link to={"/add-task"} className={cls.header_button}>
              Добавить задание
            </Link>
          </Section>
        </Section>

        <Section className={cls.tasks_inner}>
          {data <= [] ? (
            <h1 className={cls.loading}>Загрузка подождите...</h1>
          ) : (
            <>
              {data.map((item) => (
                <div key={item.id} className={cls.task}>
                  <Section
                    display="flex"
                    align="center"
                    overflow="hidden"
                    className={cls.task_imgname}
                  >
                    {/* <img src={item.img} alt="img" className={cls.task_img} /> */}
                    <p className={cls.task_name}>№ {item.id}</p>
                  </Section>

                  <Section
                    display="flex"
                    width="70%"
                    gap="10px"
                    className={cls.task_info}
                  >
                    <p className={cls.task_title}>{item.description}</p>
                    <div className={cls.task_price}>{item.price} ₽уб</div>
                  </Section>

                  <Section
                    width="25%"
                    display="flex"
                    align="center"
                    justify="space-between"
                    className={cls.task_buttons}
                    onClick={() => {
                      handleIframe({
                        link: item.url,
                        timer: item.timer,
                        taskId: item.id,
                      });
                    }}
                  >
                    <Button
                      width="70%"
                      height="35px"
                      // onClick={() =>
                      //   taskComplete({
                      //     userId: userId.id,
                      //     taskId: item.id,
                      //   })
                      // }
                    >
                      Выполнить
                    </Button>
                    <div className={cls.task_clock_icon}>
                      {item.icon} {item.timer} сек
                    </div>
                  </Section>
                </div>
              ))}
              <Section
                width="100%"
                padding="25px 0 0 0"
                display="flex"
                align="center"
                justify="space-between"
                className={cls.navigator_btn_box}
              >
                <Button
                  padding="0 20px"
                  color="black"
                  height="35px"
                  back="white"
                  className={cls.navigator_btn}
                  onClick={decrement}
                >
                  <IoChevronForwardOutline className={cls.navigator_icon1} />
                </Button>
                <Button
                  padding="0 20px"
                  color="black"
                  height="35px"
                  back="white"
                  className={cls.navigator_btn}
                  onClick={increment}
                >
                  <IoChevronForwardOutline className={cls.navigator_icon2} />
                </Button>
              </Section>
            </>
          )}
        </Section>
      </div>
    </div>
  );
};
