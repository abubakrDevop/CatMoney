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

  const [active, setActive] = React.useState(false)
  const [activeTasksUser, setActiveTasksUser] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const [addAmountTasksUser, setAddAmountTasksUser] = React.useState('')
  const [getActive, setGetActive] = React.useState(false)
  const [addAmount, setAddAmount] = React.useState('')
  const [getAmount, setGetAmount] = React.useState('')

  const [items, setItems] = useState([])
  console.log("items", items)

    let data = [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "1.40",
        title: "Зарегистрироваться на сайте",
        link: "",
        icon: <IoTrashOutline />,
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "2.23",
        title: "Поставить лайк и оставить коментарии",
        link: "",
        icon: <IoTrashOutline />,
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "0.99",
        title: "Зарегистрироваться на сайте",
        link: "",
        icon: <IoTrashOutline />,
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "1.59",
        title: "Поставить лайк и оставить коментарии",
        link: "",
        icon: <IoTrashOutline />,
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "0.66",
        title: "Зарегистрироваться на сайте",
        link: "",
        icon: <IoTrashOutline />,
      },
    ];

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

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/v1/userTasks/${2}`)
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const deleteTask = () => {
      axios
      .delete("https://69e9-80-94-250-38.eu.ngrok.io/api/tasks/v2/taskDel")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const stopTask = () => {
      axios
      .get("https://69e9-80-94-250-38.eu.ngrok.io/api/tasks/v2/taskDel")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

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
                {data.map((item, index) => {            
                  return <div key={item.id} className={cls.task}>                   
                    <div className={cls.task_data}>
                      <section className={cls.task_id}>#{item.id}</section>
                        <p className={cls.task_title}>{item.title}</p>
                        <p className={cls.task_title}>Баланс: {item.price} ₽уб</p>
                        <div className={cls.task_price}>
                          Цена: {item.price} ₽уб
                        </div>
                    </div>

                    <section className={cls.task_buttons}>
                      <div className={cls.task_buttons_tasksBlock}>
                      <button onClick={() => handlerTopUPTasksUser(index)} className={cls.task_button2}>Пополнить</button>
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
                      <button onClick={stopTask} className={cls.task_button1}>Остановить</button>
                      <button onClick={() => editTask(index)} className={cls.task_button1}>
                        Редактировать
                      </button>                     
                      <button onClick={deleteTask} className={cls.task_button1}>Удалить</button>
                    </section>
                    {visible && activeItem === index && <AddTask text="Активировать изменения" onClick={setVisible} />}
                  </div>
                })}
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}