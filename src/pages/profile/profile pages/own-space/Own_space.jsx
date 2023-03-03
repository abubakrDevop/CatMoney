import React, { useState } from "react";
import cls from '../own-space/Own_space.module.scss'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form } from "../../../../helpers/form/index";

export const Ownspace = () => {
  const [money, setMoney] = useState('')
  const [withdrawMoney, setWithdrawMoney] = useState('')
  const [popapMoney, setPopapMoney] = useState(false)
  const [popapMoneyWithdraw, setPopapMoneyWithdraw] = useState(false)

  const { reset, register, handleSubmit } = useForm()

    const idUser = JSON.parse(localStorage.getItem("regist"));
    console.log("idUserrrrrr", idUser.id);

    const onSubmit = (data) => {
      const body = {
        id: idUser.id,
        // image: imageUrl,
        name: data.name,
        lastname: data.lastname,
        login: data.login,
        email: data.email,
        password: data.password,
        mode: 1,
        wallet: data.wallet

      };

      axios
        .post("https://088a-80-94-250-40.eu.ngrok.io/api/v2/settings", body)
        .then((res) => {
          console.log(res);
          if (res.data.status === "200") {
            reset();
             alert("Данные успешно обновлены")
          } else if (res.data.status === "") {
            reset();
          } else if (res.data.status === "") {
            reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const onChangeSumMoney = (e) => {
      setMoney(e.target.value)
      
    }
    const onChangeWithdrawMoney = (e) => {
      setWithdrawMoney(e.target.value)
     
    }

    console.log("money", money)

    const onAddMoney = () => {
      setPopapMoney(!popapMoney)
    }
    const onWithdrawMoney = () => {
      setPopapMoneyWithdraw(!popapMoneyWithdraw)
    }
    console.log("popapMoney", popapMoney)

    const handlerWithdrawMoney = () => {
      alert(`Вывод ${withdrawMoney ? withdrawMoney : 0} рублей`)
      setPopapMoneyWithdraw(!popapMoneyWithdraw)
      setWithdrawMoney('')
      // axios
      // .post("https://088a-80-94-250-40.eu.ngrok.io/api/v2/settings", {money: money})
      // .then((res) => {
      //   console.log(res);
      //   if (res.data.status === "200") {
      //     reset();
      //      alert(`Счёт пополнен на ${money} рублей`)
      //   } else if (res.data.status === "") {
      //     reset();
      //   } else if (res.data.status === "") {
      //     reset();
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
    const onSendMoney = () => {
      alert(`Счёт пополнен на ${money ? money : 0} рублей`)
      setPopapMoney(!popapMoney)
      setMoney('')
      // axios
      // .post("https://088a-80-94-250-40.eu.ngrok.io/api/v2/settings", {money: money})
      // .then((res) => {
      //   console.log(res);
      //   if (res.data.status === "200") {
      //     reset();
      //      alert(`Счёт пополнен на ${money} рублей`)
      //   } else if (res.data.status === "") {
      //     reset();
      //   } else if (res.data.status === "") {
      //     reset();
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.ownspace}>
      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <img
            className={cls.section_img}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="img"
          />
          <section className={cls.section_namebox}>
            <div className={cls.ownspace_namebox_in}>
              {" "}
              Имя:
              <input
                className={cls.section_name}
                {...register("name", Form.Options.settings)}
              />
            </div>
            <div className={cls.ownspace_namebox_in}>
              {" "}
              Фамилия:
              <input
                className={cls.section_name}
                // value={'Не доступно!'}
                {...register("lastname", Form.Options.settings)}
              />
            </div>
          </section>
        </section>

        <section className={cls.ownspace_section}>
          <div className={cls.section_aboutbox}>
            <textarea
              className={cls.section_about}
              // value={'Не доступно!'}
              {...register("about", Form.Options.settings)}
            />
          </div>
        </section>
      </section>

      <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_balance}>
          <h1 className={cls.balance_headtitle}>Баланс</h1>
          <h1 className={cls.balance_title}>0 ₽</h1>
          <section className={cls.ownspace_buttons}>
            <button onClick={onAddMoney} className={cls.buttons_button}>Пополнить</button>
            {popapMoney && <div className={cls.buttons_popap}>
              <input placeholder="Введите сумму" className={cls.buttons_popap_input} type="text" onChange={onChangeSumMoney} value={money}/>
                <button className={cls.buttons_popap_button} onClick={onSendMoney}>Подтвердите</button>
            </div>}
            <button onClick={onWithdrawMoney} className={cls.buttons_button}>Вывести</button>
            {popapMoneyWithdraw && <div className={cls.buttons_popap_right}>
              <input placeholder="Введите сумму" className={cls.buttons_popap_right_input} type="text" onChange={onChangeWithdrawMoney} value={withdrawMoney}/>
                <button className={cls.buttons_popap_right_button} onClick={handlerWithdrawMoney}>Подтвердите</button>
            </div>}
          </section>
        </section>

        <section className={cls.ownspace_info}>
          <p className={cls.info_text}>
            Ваш логин:
            <input
              className={cls.info_text_input}
              // value={'Не доступно!'}
              {...register("login", Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Ваш email:
            <input
              className={cls.info_text_input}
              // value={'Не доступно!'}
              {...register("email", Form.Options.email)}
            />
          </p>
          <p className={cls.info_text}>
            Ваш пароль:
            <input
              className={cls.info_text_input}
              // value={'Не доступно!'}
              {...register("password", Form.Options.password)}
            />
          </p>
          <p className={cls.info_text}>
            Ваш кошелёк:
            <input
              className={cls.info_text_input}
              // value={'Не доступно!'}
              {...register("wallet", Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Ваш id пользователя: <span>{idUser.id ? idUser.id : "Ваш 22222"}</span>
          </p>
        </section>

        <button type="submit" className={cls.ownspace_changeinfo}>
          Редактировать профиль
        </button>
      </section>
    </form>
  );
}