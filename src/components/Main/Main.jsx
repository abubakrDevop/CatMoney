import React, { useState, useEffect } from "react";
import cls from '../Main/Main.module.scss'
import { IoChevronDownOutline } from 'react-icons/io5'
import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import axios from "axios";

Chart.register(...registerables)

export const Main = () => {
  const [usersValues, setUsersValues] = useState([])
  // const [onlineValues, setOnlineValues] = useState([])
  // const [countDayValues, setCountDayValues] = useState([])

  const users = usersValues.users ? usersValues.users : 5
  const onlineUsers = usersValues.online ? usersValues.online : 10
  const countDay = usersValues.day ? usersValues.day : 10
  const countPayment = usersValues.payment ? usersValues.payment : 10

  useEffect(() => {
  axios.get('http://localhost:5000/api/v1/counter')
    .then(res => {
      console.log(res.data)
      setUsersValues(res.data)
    })
    .catch(error => console.log(error))
  }, [])


  Chart.defaults.font.size = 16;
  Chart.defaults.font.weight = '500';
  Chart.defaults.color = '#9BD0F5';
  const labels = [`Нас уже: ${users}`]
  const arrayUsers = [users, 100]
  // const dataArrayNoWrite = [1,2,2,2]

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: arrayUsers,
        backgroundColor: ['#dc3545','rgba(75,192,192,0.2)'],
        borderColor: 'rgba(75,192,192,1)',
        fill: true,
        borderWidth: 3,
        // lineTension: 0.5
      },
    ]
  }

  const labelsOnline = [`В сети: ${onlineUsers} чел.`]
  const arrayOnlineUsers = [onlineUsers, 100]
  const onlineData = {
    labels: labelsOnline,
    datasets: [
      {
        label: '',
        data: arrayOnlineUsers,
        backgroundColor: ['#dc3545','rgba(0, 0, 255, 0.3)'],
        borderColor: 'rgba(75,192,192,1)',
        fill: true,
        borderWidth: 3,
        // lineTension: 0.5
      },
    ]
  }
  const labelsDay = [`Раб.: ${countDay} дней`]
  const arrayDay = [countDay, 100]
  const dataDay = {
    labels: labelsDay,
    datasets: [
      {
        label: '',
        data: arrayDay,
        backgroundColor: ['#dc3545','rgba(0, 255, 0, 0.4)'],
        borderColor: 'rgba(75,192,192,1)',
        fill: true,
        borderWidth: 3,
        // lineTension: 0.5
      },
    ]
  }

  const labelsLine = ['янв', 'фев', 'март']
  const paymentDate = [countPayment]
  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        label: 'Выплачено',
        data: paymentDate,
        backgroundColor: ['#dc3545','#dc3545', '#dc3545'],
        borderColor: 'rgba(75,192,192,1)',
        fill: true,
        borderWidth: 3,
        // lineTension: 0.5
      },
    ]
  }


  return (
    <main className={cls.main}>
      <section className={cls.main__block}>
      <div className={cls.main__info}>
      <p className={cls.main__title}>Начните зарабатывать вместе с нами!</p>
      <h1 className={cls.main__headtitle}>Выполняйте задания <br /> Выводите деньги</h1>
      <p className={cls.main__description}>Быстрый доход, мгновеные выплаты. Мы стараемся помочь людям как второ источник пасивного дохода, на нашем сайте ежедневно обновляються задания что дает быстро заработать первые деньги. Покупая 
        <span className={cls.main__des_in}> премиум </span> 
      вы получаете дополнительные x2 монет, плюшки и бонусы :D
      </p>
      <button className={cls.main__button}>Перейти к заданиям</button>
      </div>

      <div className={cls.main__statistics}>  
      <div className={cls.main__statistics_block}>
            <Doughnut data={data} options={{
              responsive: true,
              cutout:"50%"}} 
              />
            <Bar  data={dataLine}  />
            <Doughnut  data={onlineData} options={{responsive: true, cutout:"50%"}} />
            <Doughnut  data={dataDay} options={{responsive: true, cutout:"50%"}} />
        </div>                

      </div>
      </section>

      <section className={cls.main__section}>
        <IoChevronDownOutline className={cls.scroll_icon} />
        <IoChevronDownOutline className={cls.scroll_icon} />
      </section>
    </main>
  )
}