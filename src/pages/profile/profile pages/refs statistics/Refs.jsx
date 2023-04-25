import React, { forwardRef, useEffect } from "react";
import cls from '../refs statistics/Refs.module.scss'
import { $api } from '../../../../helpers/constant/index'
import axios from "axios";

function Refs({text}, ref) {
  
  const refs = [
    {
      id: 1,
      created: '12.05.2023',
      referalName: 'Alex Kendal',
      balance: '200',
      income: '20'
    },
    {
      id: 2,
      created: '12.05.2023',
      referalName: 'Alex Kendal',
      balance: '200',
      income: '20'
    },
    {
      id: 3,
      created: '12.05.2023',
      referalName: 'Alex Kendal',
      balance: '200',
      income: '20'
    },
  ]
  
  
  const [users, setUsers] = React.useState([])

  const userId = JSON.parse(localStorage.getItem("regist"))

  const data = users.length > 0 ? users : refs
  const totalReferalIncomes = users.length > 0 ? users.map(it => it.totalReferalIncome).reduce((acc, rec) => {
       return acc + rec
    }) : 0

  useEffect(() => {
    axios
    .get(`http://localhost:5000/Referals/user/${userId.id}`)
    .then(res => {
      console.log(res.data)
      if (res.status === '') {
        setUsers('')
      } else if (res.status === 200) {
        setUsers(res.data)
      }
    })
  }, [])


  return (
    <div className={cls.refs}>
      <h1 className={cls.refs_headTitle} ref={ref}> Мои рефералы </h1>
      <section className={cls.refs_container}>
            <div className={cls.refs_header}>
              <div className={cls.refs_header_info}>
                <p className={cls.info_text}>Количество приглашенных: {users.length} </p>
              </div>
              <div className={cls.refs_header_info}>
                <p className={cls.info_text}>Общий доход от приглашенных: {totalReferalIncomes} ₽ </p>
              </div>
            </div>
        {
          users.length === 0  ? 
          <h1 className={cls.user_undefined}> Приглашенные пользователи отсутсвуют! </h1>
          :
          data.map(item => (
            <div key={item.created} className={cls.ref_box}>
              <p className={cls.ref_box_text}> {item.referalName} </p>
              <p className={cls.ref_box_text}> Доход от реферала: {item.income} ₽</p>
              <p className={cls.ref_box_text}> Текущий баланс: {item.balance} ₽</p>
              <p className={cls.ref_box_text}> Дата регистрации: {item.created} </p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default forwardRef(Refs)