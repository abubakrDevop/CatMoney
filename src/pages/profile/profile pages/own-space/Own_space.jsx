import React from "react";
import cls from '../own-space/Own_space.module.scss'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form } from '../../../../helpers/form/index'

export const Ownspace = () => {
  const {
    reset,
    register,
    handleSubmit,
  } = useForm()

  const [active, setActive] = React.useState(false)
  const [getActive, setGetActive] = React.useState(false)
  const [addAmount, setAddAmount] = React.useState('')
  const [getAmount, setGetAmount] = React.useState('')

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

  const handlerAddConfirm = () => {
    setActive(!active);
    alert(`Пополнено на ${addAmount ? addAmount : 0} рублей`);
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

  return (
    <div className={cls.ownspace}>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <img
            className={cls.section_img}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="img"
          />
          <section className={cls.section_namebox}>
            <div className={cls.ownspace_namebox_in}>
              Имя:
              <p className={cls.section_name}> {} </p>
            </div>
            <div className={cls.ownspace_namebox_in}>
              Фамилия:
              <p className={cls.section_name}> {} </p>
            </div>
          </section>
        </section>

        <section className={cls.ownspace_section}>
          <div className={cls.section_aboutbox}>
            <p className={cls.section_about}> {} </p>
          </div>
        </section>
      </section>

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
            Ваш id пользователя: <span> {} </span>
          </p>
        </section>

        <button className={cls.ownspace_changeinfo}>
          Редактировать профиль
        </button>
      </section>
    </div>
  );
}