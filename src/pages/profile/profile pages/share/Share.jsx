import React from "react";
import cls from '../share/Share.module.scss'
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Share = () => {
  const [active, setActive] = React.useState(false)

  const userId = JSON.parse(localStorage.getItem("regist"))
  const userLink = `http://localhost:3000/1/${userId.id}`;

  const handleClipboard = (copied) => {
    navigator.clipboard.writeText(copied)
    .then(() => {
      setActive(true)
      setTimeout(() => {setActive(false)}, 2000)
    })
  }

  return (
    <div className={cls.share}>
      <div className={active === true ? `${cls.share_copied} ${cls.share_copied_active}` : cls.share_copied}>Скопировано в Буфер обмена!</div>
      <div className={cls.share_block}>
        <h1 className={cls.share_title}>Приглашай друзей</h1>
        <p className={cls.share_subtitle}>
          При переходе друга по данной ссылке и регистрации ты получаешь
          проценты от его выполненных задач также другие бонусы!
        </p>

        <div className={cls.share_link}>
          <input className={cls.share_input} type="text" value={userLink} />
          <button onClick={() => {
            setActive(prev => !prev)
            handleClipboard(userLink)
          }} className={cls.share_button}>
            <IoCopyOutline className={cls.share_icon} />
          </button>
        </div>
        <Link to={'refs'} className={cls.share_refs} >Мои рефералы</Link>
      </div>
    </div>
  );
}