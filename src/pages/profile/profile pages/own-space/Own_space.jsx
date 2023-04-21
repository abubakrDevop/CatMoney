import React, { useEffect, useState } from "react";
import cls from '../own-space/Own_space.module.scss'
import axios from "axios";
import { AddTask } from "../../../add-task/AddTask"
import { $api } from "../../../../helpers/constant/index";
import { data } from '../own-space/helpers'

export const Ownspace = () => {

  const [active, setActive] = useState(false)
  const [activeTasksUser, setActiveTasksUser] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [addAmountTasksUser, setAddAmountTasksUser] = useState('')
  const [getActive, setGetActive] = useState(false)
  const [addAmount, setAddAmount] = useState('')
  const [getAmount, setGetAmount] = useState('')
  const [items, setItems] = useState([])
  const [tasks, setTasks] = useState(items.length > 0 ? items : data);
  const [updateTask, setUpdateTask] = useState([]);
  const [updateTaskId, setUpdateTaskId] = useState(0);

  const userTasks = items.length > 0 ? items : tasks

  const userId = JSON.parse(localStorage.getItem("regist"));

  const handlerAddConfirmTasksUser = (taskId) => {
    setActiveTasksUser(!activeTasksUser);
    alert(`Пополнено на ${addAmountTasksUser ? addAmountTasksUser : 0} рублей`);
    setAddAmountTasksUser('')

    const body = {
      id: taskId,   //айди таска
      userId: userId.id,   //айди пользователя
      balance: +addAmountTasksUser  //баланс на сколько пополняется таск
    }

    $api.post("", body)
    .then(res => {
      if (res.data.status === 'На вашем балансе недостаточно средств') {
        alert('На вашем балансе недостаточно средств')
      } else if (res.data === '') {
        setItems(res.data)
      }
    })
  }


  const handlerTopUPTasksUser = (index) => {
    setActiveItem(index)
    setActiveTasksUser(!activeTasksUser);
  };

  const changeAddAmountTasksUser = (e) => {
    setAddAmountTasksUser(e.target.value);
  }

  const handlerGetConfirm = () => {
    setActive(!active);
    alert(`Пополнено на ${addAmount ? addAmount : 0} рублей`)
    setAddAmount('')
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


  const handlerAddConfirm = () => {
    setGetActive(!getActive);
    alert(`Пополнено на ${getAmount ? getAmount : 0} рублей`);
    setGetAmount('')

    const body = {
      id: userId.id,  // айди пользователя
      balance: getAmount,  //баланс на который он хочет пополнить
      walletName: ''  //название его кошелька
    }
    $api.post("/api/users/v2/replenish", body)
    .then(res => {
      console.log(res)
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
      axios
        .get(
          `http://localhost:5000/api/v1/userTasks?userId=${userId.id}`)
        .then((res) => {
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [
      updateTasks?.description,
      updateTasks?.price,
      updateTasks?.timer,
      updateTasks?.URL,
      updateTasks?.start,
      updateTasks?.balance,
    ]);

    const deleteTask = (index) => {
      const taskId = userTasks[index].id;
      $api
        .delete(
          `/Task/delete?taskId=${taskId}&userId=${userId.id}`
        )
        .then((res) => {
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

	const handleChangeConnected = (id, start) => {
    setTasks(
      tasks.map((item) =>
        item.id === id && item.start === 0
          ? { ...item, start: 1 }
          : { ...item, start: 0 }
      )
    );

    if (start === 1) {
      $api
        .post("/api/tasks/v2/stopTask", {
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
      $api
        .post("/api/tasks/v2/startTask", {
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

    const editTask = (index, id) => {
        setVisible(!visible)
        setActiveItem(index)
        setUpdateTaskId(id);
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
                            className={cls.task_button_delete}
                          >
                            Остановить
                          </button>
                        )}
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
                          taskId={userTasks[index].id}
                          setUpdateTask={setUpdateTask}
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