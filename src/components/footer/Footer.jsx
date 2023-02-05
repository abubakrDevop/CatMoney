import React from "react";
import cls from "../footer/Footer.module.scss"
import  {
          IoChatbubblesOutline, 
          IoDiamondOutline, 
          IoShieldCheckmarkOutline, 
          IoWalletOutline 
        } from 'react-icons/io5'

export const Footer = () => {
  const blocks = [
    {
      id: 1,
      icon: <IoShieldCheckmarkOutline />,
      text: 'БЕЗОПАСНОСТЬ И ЗАЩИТА',
      title: 'Платформа защищена самыми передовыми средствами шифровальных протоколов и надёжно хранит анонимность всех Ваших данных.',
    },
    {
      id: 2,
      icon: <IoDiamondOutline />,
      text: 'ПРЕДЛОЖЕНИЯ',
      title: 'Различные варианты рекламы, которые помогут вам раскрутить ваши интеренет ресурсы быстро и не дорого.',
    },
    {
      id: 3,
      icon: <IoChatbubblesOutline />,
      text: 'СЛУЖБА ПОДДЕРЖКИ 24/7',
      title: 'Наши отзывчивые операторы круглосуточно находятся на связи и всегда рады Вам помочь. Для быстрого решения вопроса обратитесь в Telegram',
    },
    {
      id: 4,
      icon: <IoWalletOutline />,
      text: 'МГНОВЕННЫЕ ВЫПЛАТЫ',
      title: 'Больше не нужно ждать - всего один щелчок мыши и Ваша выплата моментально зачислена на указанные платёжные реквизиты.',
    },
  ]

  return (
    <footer className={cls.footer}>
      <h1 className={cls.headtitle}>НАВЕДИТЕСЬ НА КАРТОЧКИ</h1>
      <p className={cls.title}>ДЛЯ БОЛЬШЕЙ ИНФОРМАЦИИ</p>

      <section className={cls.footer__section}>
        {
          blocks.map(item => (
            <div key={item.id} className={cls.section_block}>
              <p className={cls.block_icon}> {item.icon} </p>
              <h1 className={cls.block_text}> {item.text} </h1>
              <p className={cls.block_title}> {item.title} </p>
            </div>
          ))
        }
      </section>
    </footer>
  )
}