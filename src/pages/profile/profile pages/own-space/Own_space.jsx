import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import cls from "../own-space/Own_space.module.scss";
import axios from "axios";
import { AddTask } from "../../../add-task/AddTask";
import { $api, baseURL } from "../../../../helpers/constant/index";
import { data } from "../own-space/helpers";

export const Ownspace = () => {
  let navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [activeTasksUser, setActiveTasksUser] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [addAmountTasksUser, setAddAmountTasksUser] = useState("");
  const [getActive, setGetActive] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");

  const [items, setItems] = useState([]);
  const [userData, setUserData] = useState({
    balance: '0',
    login: '',
    email: '',
    walletName: '',
  })

  const [tasks, setTasks] = useState(items.length > 0 ? items : data);
  const [updateTask, setUpdateTask] = useState([]);
  const [updateTaskId, setUpdateTaskId] = useState(0);

  // const userTasks = items.length > 0 ? items : tasks;

  const userId = JSON.parse(localStorage.getItem("regist"));

  const handlerAddConfirmTasksUser = (taskId) => {
    setActiveTasksUser(!activeTasksUser);
    alert(`Пополнено на ${addAmountTasksUser ? addAmountTasksUser : 0} рублей`);
    setAddAmountTasksUser("");

    const body = {
      taskId: taskId,
      userId: userId.id,
      description: items.description,
      url: items.url,
      timer: 0,
      price: 0,
      balance: items?.balance + addAmountTasksUser,
    };

    $api
      .put("/Task/update", body, {
        headers: {
          Authorization: `Bearer ${userId?.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === "На вашем балансе недостаточно средств") {
          alert("На вашем балансе недостаточно средств");
        } else if (res.data === 200) {
          setItems(res.data)
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate("/register")
        }
      });
  };

  const handlerTopUPTasksUser = (index) => {
    setActiveItem(index);
    setActiveTasksUser(!activeTasksUser);
  };

  const changeAddAmountTasksUser = (e) => {
    setAddAmountTasksUser(e.target.value);
  };

  const handlerGetConfirm = () => {
    setGetActive(!getActive);
    alert(`Вывести ${getAmount ? getAmount : 0} рублей`);
    setGetAmount("");
    const body = {
      id: userId.id,
      money: +getAmount,
    };
    $api
      .post("/User/withdrawal", body, {
        headers: {
          Authorization: `Bearer ${userId?.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Успешно :D")
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate("/register")
        }
      });
  };
  const handlerTopUP = () => {
    setActive(!active);
  };

  const changeAddAmount = (e) => {
    setAddAmount(e.target.value);
  };

  const handlerAddConfirm = () => {
    setActive(!active);
    alert(`Пополнено на ${addAmount ? addAmount : 0} рублей`);
    setAddAmount("");

    const body = {
      id: userId.id, // айди пользователя
      balance: addAmount, //баланс на который он хочет пополнить
      // walletName: '',  //название его кошелька
    };
    $api
      .post("/User/replenish", body, {
        headers: {
          Authorization: `Bearer ${userId?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate("/register")
        }
      });
  };

  const handlerGetSum = () => {
    setGetActive(!getActive);
  };

  const changeGetAmount = (e) => {
    setGetAmount(e.target.value);
  };

  const updateTasks = updateTask.find((item) => item.id === updateTaskId);

  useEffect(() => {
    try {
      axios
      .get(`http://localhost:5000/Task/user/${userId?.id}`)
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.tasks);
          setUserData(res.data.user)
          console.log(res.data)
        }
      })
    } catch (err) {
      console.log(err)
    }

  }, [
    updateTasks?.description,
    updateTasks?.price,
    updateTasks?.timer,
    updateTasks?.URL,
    updateTasks?.start,
    updateTasks?.balance,
    items?.balance,
  ]);

  const deleteTask = (index) => {
    const taskId = items[index].id;
    $api
      .delete(`/Task/delete?taskId=${taskId}`, {
        headers: {
          Authorization: `Bearer ${userId?.token}`,
        },
      })
      .then((res) => {
        if (res.data.response.status === 401) {
          navigate("/register")
        }
        setItems(res.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate("/register")
        }
      });
  };

  const handleButtonClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status: item.status === 0 ? 1 : 0 } : item
    );

    const updatedItem = updatedItems.find((item) => item.id === id);

    $api
      .post(
        "/Task/handle",
        {
          action: updatedItem.status === 0 ? "stop" : "start",
          taskId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${userId?.token}`,
          },
        }
      )
      .then((res) => {
        setItems((items) =>
          items.map((item) =>
            item.id === id ? { ...item, status: res.data.status } : item
          )
        );
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("regist");
          localStorage.removeItem("auth");
          navigate("/register")
        }
      });
  };

  const editTask = (index, id) => {
    setVisible(!visible);
    setActiveItem(index);
    setUpdateTaskId(id);
  };

  return (
    <div className={cls.ownspace}>
      <section className={cls.ownspace_headsection}>
        <div id="message"></div>
        <section className={cls.ownspace_balance}>
          <h1 className={cls.balance_headtitle}>Баланс</h1>
          <h1 className={cls.balance_title}>{userData.balance} ₽</h1>
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
                  Подтвердить{" "}
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
                  Подтвердить{" "}
                </button>
              </div>
            )}
          </section>
        </section>

        <section className={cls.ownspace_info}>
          <p className={cls.info_text}>Ваш логин: {userData.login}</p>
          <p className={cls.info_text}>Ваш email: {userData.email}</p>
          <p className={cls.info_text}>Ваш кошелёк: {userData.walletName}</p>
          <p className={cls.info_text}>Ваш id: {userId?.id}</p>
        </section>
      </section>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <div className={cls.section_aboutbox}>
            <div className={cls.section_about}>
              <div className={cls.about_title}>Мои задания</div>
              <section className={cls.tasks_inner}>
                {
                  items <= [] ? <h1 className={cls.tasks_inner_text}>Создайте свои задания, чтобы их увидеть!</h1> :
                  items.map((item, index) => {
                    return (
                      <div key={item.id} className={cls.task}>
                        <div className={cls.task_data}>
                          <section className={cls.task_id}>#{item.id}</section>
                          <p className={cls.task_title}>{item.description}</p>
                          <p className={cls.task_title}>
                            Баланс: {item.balance} ₽уб
                          </p>
                          <div className={cls.task_price}>
                            Цена: {item.timer} ₽уб
                          </div>
                          <div className={cls.task_price}>
                            Просмотров: {item.views}
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
                                  type="number"
                                  onChange={changeAddAmountTasksUser}
                                  value={addAmountTasksUser}
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    handlerAddConfirmTasksUser(item.id)
                                  }
                                  className={cls.buttons_popap_button_tasks}
                                >
                                  {" "}
                                  Подтвердить{" "}
                                </button>
                              </div>
                            )}
                          </div>
                          <button
                            className={
                              item.status === 0
                                ? `${cls.task_button1}`
                                : `${cls.task_button_delete}`
                            }
                            onClick={() => handleButtonClick(item.id)}
                          >
                            {item.status === 0 ? "Запустить" : "Остановить"}
                          </button>

                          <button
                            onClick={() => editTask(index, item.id)}
                            className={cls.task_button1}
                          >
                            Редактировать
                          </button>

                          <button
                            onClick={() => deleteTask(index)}
                            className={cls.task_button_delete}
                          >
                            Удалить
                          </button>
                        </section>
                        {visible && activeItem === index && (
                          <AddTask
                            text="Активировать изменения"
                            onClick={setVisible}
                            taskId={items[index].id}
                            setUpdateTask={setUpdateTask}
                          />
                        )}
                      </div>
                    );
                  })
                }
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
