import React, { useEffect, useState } from "react";
import cls from '../own-space/Own_space.module.scss'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form } from '../../../../helpers/form/index'
import { IoTrashOutline } from "react-icons/io5";
import { AddTask } from "../../../add-task/AddTask"

export const Ownspace = () => {
  const {
    reset,
    register,
    handleSubmit,
  } = useForm()

      let data = [
        {
          id: 1,
          Timer: "1.40",
          Balance: 100,
          Description: "Зарегистрироваться на сайте",
          link: "",
          start: 0,
        },
        {
          id: 11,
          Timer: "2.23",
          Description: "Поставить лайк и оставить коментарии",
          link: "",
          Balance: 100,
          start: 0,
        },
        {
          id: 3,
          Timer: "0.99",
          Description: "Зарегистрироваться на сайте",
          link: "",
          Balance: 100,
          start: 0,
        },
        {
          id: 4,
          Timer: "1.59",
          Description: "Поставить лайк и оставить коментарии",
          link: "",
          Balance: 100,
          start: 0,
        },
        {
          id: 5,
          Timer: "0.66",
          Description: "Зарегистрироваться на сайте",
          link: "",
          Balance: 100,
          start: 0,
        },
      ];

  const [active, setActive] = useState(false)
  const [activeTasksUser, setActiveTasksUser] = useState(false);
  const [visible, setVisible] = useState(false);
  const [startEndStopTask, setStartEndStopTask] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [addAmountTasksUser, setAddAmountTasksUser] = useState('')
  const [getActive, setGetActive] = useState(false)
  const [addAmount, setAddAmount] = useState('')
  const [getAmount, setGetAmount] = useState('')
  	const [tasks, setTasks] = useState(data);

  const [items, setItems] = useState([])
  console.log("items", items)
  console.log(
    "items.start",
    items.map((elem) => elem.start)
  );



    // console.log("data", data.map((elem) => elem.start));
    // console.log("tasks", tasks.map((elem) => elem.start));

  // const userData = localStorage.getItem('userData')

  // let [
  //   {
  //     login,
  //     email,
  //     password,
  //     wallet,
  //     userId,
  //   }
  // ] = userData

  // axios.get('')
  //   .then(data => {localStorage.setItem('userData', data)})

  const handlerAddConfirmTasksUser = () => {
    setActiveTasksUser(!activeTasksUser);
    alert(`Пополнено на ${addAmountTasksUser ? addAmountTasksUser : 0} рублей`);
    setAddAmountTasksUser('')
    console.log(addAmountTasksUser)
    // axios.post("", { set: addAmountTasksUser }).then((res) => {
    //   res.status === 200 ? alert("Успешно :D") : alert("Ошибка :(");
    // });
  }
  const handlerTopUPTasksUser = (index) => {
    setActiveItem(index)
    setActiveTasksUser(!activeTasksUser);
  };

  const changeAddAmountTasksUser = (e) => {
    setAddAmountTasksUser(e.target.value);
  }

  const handlerAddConfirm = () => {
    setActive(!active);
    alert(`Пополнено на ${addAmount ? addAmount : 0} рублей`);
    setAddAmount('')
    console.log(addAmount)
    // axios.post("", { set: addAmount }).then((res) => {
    //   res.status === 200 ? alert("Успешно :D") : alert("Ошибка :(");
    // });
  }
  const handlerTopUP = () => {
    setActive(!active);
  };

  const changeAddAmount = (e) => {
   setAddAmount(e.target.value);
  }


  const handlerGetConfirm = () => {
    setGetActive(!getActive);
    alert(`Пополнено на ${getAmount ? getAmount : 0} рублей`);
    setGetAmount('')
    console.log(getAmount);
    // axios.post("", { set: addAmount }).then((res) => {
    //   res.status === 200 ? alert("Успешно :D") : alert("Ошибка :(");
    // });
  };
  const handlerGetSum = () => {
    setGetActive(!getActive);
  };

  const changeGetAmount = (e) => {
    setGetAmount(e.target.value);
  };


  // const setMoney = (data) => {
  //   alert(`Пополнено на ${data.setmoney ? data.setmoney : 0} рублей`);
  //   console.log("data.setmoney", data.setmoney)
    // axios.post('', { set: data.setmoney } )
    // .then(res => {
    //   res.status === 200 ? alert('Успешно :D') : alert('Ошибка :(')
    // })
  // }

  // const getMoney = (data) => {
  //   alert(`Выведено ${data.getmoney ? data.getmoney : 0} рублей`);
    // axios.post('', { get: data.getmoney } )
    // .then(res => {
    //   res.status === 200 ? alert('Успешно :D') : alert('Ошибка :(')
    // })
  // }

   const userId = JSON.parse(localStorage.getItem("regist"));

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/v1/userTasks/${userId.id}`)
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const userTasks = items.length > 0 ? items : tasks

    const deleteTask = (index) => {
      const taskId = userTasks[index].id;
      axios
        .delete(
          `https://5160-80-94-250-65.eu.ngrok.io/api/tasks/v2/taskDel/${taskId}`
        )
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const stopTask = (index, id) => {
      const taskId = userTasks[index].id;
      console.log("taskId", taskId);
      console.log("activeItem", activeItem);
      console.log("index", index);
      console.log("id", id);

      if (startEndStopTask) {
        console.log("stop");
        axios
          .post("https://7bd1-80-94-250-65.eu.ngrok.io/api/tasks/v2/stopTask", {
            id: taskId,
          })
          .then((res) => {
            console.log(res.data);
            setItems(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("start");
        console.log("userTasks[taskId]", userTasks[taskId]);
        axios
          .post(
            "https://7bd1-80-94-250-65.eu.ngrok.io/api/tasks/v2/startTask",
            {
              id: taskId,
            }
          )
          .then((res) => {
            console.log(res.data);
            setItems(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
        setStartEndStopTask(!startEndStopTask);
    };

	const handleChangeConnected = (id, start) => {
    setTasks(
      tasks.map((item) =>
        item.id === id && item.start === 0
          ? { ...item, start: 1 }
          : { ...item, start: 0 }
      )
    );

    if (start === 1) {
      console.log("stop");
      axios
        .post("https://5160-80-94-250-65.eu.ngrok.io/api/tasks/v2/stopTask", {
          userId: userId.id,
          id: id,
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (start === 0) {
      console.log("start");
      axios
        .post("https://5160-80-94-250-65.eu.ngrok.io/api/tasks/v2/startTask", {
          userId: userId.id,
          id: id,
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

    const editTask = (index) => {
      setActiveItem(index)
      setVisible(!visible)
    }

  return (
    <div className={cls.ownspace}>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_balance}>
          <h1 className={cls.balance_headtitle}>Баланс</h1>
          <h1 className={cls.balance_title}>0 ₽</h1>
          <section className={cls.ownspace_buttons}>
            <button
              type="button"
              onClick={handlerTopUP}
              className={cls.buttons_button}
            >
              Пополнить
            </button>

            {active && (
              <div className={cls.buttons_popap}>
                <input
                  autoFocus
                  placeholder="Введите сумму"
                  className={cls.buttons_popap_input}
                  type="text"
                  onChange={changeAddAmount}
                  value={addAmount}
                />
                <button
                  type="button"
                  onClick={handlerAddConfirm}
                  className={cls.buttons_popap_button}
                >
                  {" "}
                  Подтвердите{" "}
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handlerGetSum}
              className={cls.buttons_button}
            >
              Вывести
            </button>

            {getActive && (
              <div className={cls.buttons_popap_right}>
                <input
                  autoFocus
                  placeholder="Введите сумму"
                  className={cls.buttons_popap_right_input}
                  type="text"
                  onChange={changeGetAmount}
                  value={getAmount}
                />
                <button
                  type="button"
                  onClick={handlerGetConfirm}
                  className={cls.buttons_popap_right_button}
                >
                  {" "}
                  Подтвердите{" "}
                </button>
              </div>
            )}

            {/* <button className={cls.buttons_button}>Вывести</button> */}
            {/*
            {!active && (
              <form
                onSubmit={handleSubmit(getMoney)}
                className={cls.buttons_popap}
              >
                <input
                  autoFocus
                  placeholder="Введите сумму"
                  className={cls.buttons_popap_input}
                  type="text"
                  {...register("getmoney", Form.Options.moneyInputs)}
                />
                <button type="submit" className={cls.buttons_popap_button}>
                  {" "}
                  Подтвердите{" "}
                </button>
              </form>
            )} */}
          </section>
        </section>

        <section className={cls.ownspace_info}>
          <p className={cls.info_text}>Ваш логин:</p>
          <p className={cls.info_text}>Ваш email:</p>
          <p className={cls.info_text}>Ваш пароль:</p>
          <p className={cls.info_text}>Ваш кошелёк:</p>
          <p className={cls.info_text}>
            Ваш id : <span> {} </span>
          </p>
        </section>

        {/* <button className={cls.ownspace_changeinfo}>
          Редактировать профиль
        </button> */}
      </section>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <div className={cls.section_aboutbox}>
            <div className={cls.section_about}>
              <div className={cls.about_title}>Мои задания</div>
              <section className={cls.tasks_inner}>
                {userTasks.map((item, index) => {
                  // console.log("item.id", item.id);
                  return (
                    <div key={item.id} className={cls.task}>
                      <div className={cls.task_data}>
                        <section className={cls.task_id}>#{item.id}</section>
                        <p className={cls.task_title}>{item.Description}</p>
                        <p className={cls.task_title}>
                          Баланс: {item.Balance} ₽уб
                        </p>
                        <div className={cls.task_price}>
                          Цена: {item.Timer} ₽уб
                        </div>
                      </div>

                      <section className={cls.task_buttons}>
                        <div className={cls.task_buttons_tasksBlock}>
                          <button
                            onClick={() => handlerTopUPTasksUser(index)}
                            className={cls.task_button2}
                          >
                            Пополнить
                          </button>
                          {activeItem === index && activeTasksUser && (
                            <div className={cls.buttons_popap_tasks}>
                              <input
                                autoFocus
                                placeholder="Введите сумму"
                                className={cls.buttons_popap_input_tasks}
                                type="text"
                                onChange={changeAddAmountTasksUser}
                                value={addAmountTasksUser}
                              />
                              <button
                                type="button"
                                onClick={handlerAddConfirmTasksUser}
                                className={cls.buttons_popap_button_tasks}
                              >
                                {" "}
                                Подтвердите{" "}
                              </button>
                            </div>
                          )}
                        </div>
                        {/* <button
                          onClick={() => stopTask(index, item.id)}
                          className={cls.task_button1}
                        >
                          {!startEndStopTask
                            ? "Остановить"
                            : "Запустить"}
                        </button> */}
                        {item.start === 0 ? (
                          <button
                            onClick={() =>
                              handleChangeConnected(item.id, item.start)
                            }
                            className={cls.task_button1}
                          >
                            Запустить
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleChangeConnected(item.id, item.start)
                            }
                            className={cls.task_button1}
                          >
                            Остановить
                          </button>
                        )}
                        <button
                          onClick={() => editTask(index)}
                          className={cls.task_button1}
                        >
                          Редактировать
                        </button>
                        <button
                          onClick={() => deleteTask(index)}
                          className={cls.task_button1}
                        >
                          Удалить
                        </button>
                      </section>
                      {visible && activeItem === index && (
                        <AddTask
                          text="Активировать изменения"
                          onClick={setVisible}
                          taskId={userTasks[index].id}
                        />
                      )}
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}