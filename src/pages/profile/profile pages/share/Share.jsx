import React from "react";
import cls from '../share/Share.module.scss'
import { IoCopyOutline } from "react-icons/io5";

export const Share = () => {
  const userId = JSON.parse(localStorage.getItem("regist"))
  const userLink = `http://localhost:3000/v1/${userId.id}`;
  console.log('link', userLink)

      let data = [
        {
          id: 1,
          price1: 10,
          price2: 30,
        },
        {
          id: 2,
          price1: 40,
          price2: 50,
        },
        {
          id: 3,
          price1: 10,
          price2: 90,
        },
        {
          id: 4,
          price1: 80,
          price2: 30,
        },
        {
          id: 5,
          price1: 50,
          price2: 30,
        },
      ];

      const sumInput = data.map((item) => item.price1).reduce((acc, rec) => {
        return acc + rec
      } , 0)
      const sumOutput = data.map((item) => item.price2).reduce((acc, rec) => {
        return acc + rec
      } , 0)
      
      const allRef = data.length

  return (
    <div className={cls.share}>
      <div className={cls.share_block}>
        <h1 className={cls.share_title}>Приглашай друзей</h1>
        <p className={cls.share_subtitle}>
          При переходе друга по данной ссылке и регистрации ты получаешь
          проценты от его выполненных задач также другие гарантированные призы!
        </p>
        <div className={cls.share_link}>
          <p>{userLink}</p>
          <button className={cls.share_button}>
            <IoCopyOutline className={cls.share_icon} />
          </button>
        </div>
      </div>
      <div className={cls.section_about}>
        <div className={cls.about_title}>Доходы от Партнёров</div>
        <table className={cls.ref}>
          <thead className={cls.ref_head}>
            <tr className={cls.ref_title}>
              <th className={cls.ref_text}>Партнёры</th>
              <th className={cls.ref_text}>Доход от ввода</th>
              <th className={cls.ref_text}>Доход от вывода</th>
            </tr>
          </thead>
          <tbody className={cls.ref_body}>
            {data.map((item) => (
              <tr key={item.id} className={cls.ref_body_title}>
                <td className={cls.ref_body_item}># {item.id}</td>
                <td className={cls.ref_body_item}>( {item.price1} ₽уб )</td>
                <td className={cls.ref_body_item}>{item.price2} ₽уб</td>
              </tr>
            ))}
            <tr className={cls.ref_total}>
              <td className={cls.ref_total_item}>{allRef} чел</td>
              <td className={cls.ref_total_item}>{sumInput} ₽уб</td>
              <td className={cls.ref_total_item}>{sumOutput} ₽уб</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}