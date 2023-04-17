import React, { forwardRef } from "react";
import cls from '../refs statistics/Refs.module.scss'
import { $api } from '../../../../helpers/constant/index'

function Refs({text}, ref) {
  const refs = [
    {
      id: 1,
      date: '12.05.2023',
      name: 'Alex Kendal',
      amount: '200',
      got_precent: '12%'
    },
    {
      id: 2,
      date: '12.05.2023',
      name: 'Alex Kendal',
      amount: '200',
      got_precent: '12%'
    },
    {
      id: 3,
      date: '12.05.2023',
      name: 'Alex Kendal',
      amount: '200',
      got_precent: '12%'
    },
  ]

  const headerData = [
    {
      id: 1,
      allSum: '600',
      allUsers: '3'
    },
  ]

  const [users, setUsers] = React.useState(refs)
  const [header, setHeader] = React.useState(headerData)

  // $api
  //   .get('')
  //   .then(res => {
  //     if (res.status === '') {
  //       setUsers('')
  //       headerData('')
  //     } else if (res.status === 200) {
  //       setUsers(res.data)
  //       headerData(res.data)
  //     }
  //   })

  return (
    <div className={cls.refs}>
      <h1 className={cls.refs_headTitle} ref={ref}> Мои рефералы </h1>
      <section className={cls.refs_container}>
        {
          headerData && headerData.map(item => (
            <div key={item.id} className={cls.refs_header}>
              <div className={cls.refs_header_info}>
                <p className={cls.info_text}>Количество приглашенных: {item.allUsers} </p>
              </div>
              <div className={cls.refs_header_info}>
                <p className={cls.info_text}>Общий доход от приглашенных: {item.allSum} ₽ </p>
              </div>
            </div>
          ))
        }
        {
          users === '' ? 
          <h1 className={cls.user_undefined}> Приглашенные пользователи отсутсвуют! </h1>
          :
          refs.map(item => (
            <div key={item.id} className={cls.ref_box}>
              <p className={cls.ref_box_text}> {item.name} </p>
              <p className={cls.ref_box_text}> Получаемые проценты: {item.got_precent} </p>
              <p className={cls.ref_box_text}> Полученная сумма: {item.amount} ₽</p>
              <p className={cls.ref_box_text}> Дата регистрации: {item.date} </p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default forwardRef(Refs)