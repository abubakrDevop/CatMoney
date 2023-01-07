import React from "react";
import cls from './Home.module.scss'
import { Link } from 'react-router-dom'
import  { IoShieldCheckmark, 
          IoDiamondOutline, 
          IoChatbubblesOutline,  
          IoWalletOutline,
        } from "react-icons/io5"

export const Home = () => {
  return (
    <div className={cls.home}>
      <h1 className={cls.home__headtitle}>ПАСИВНЫЙ ДОХОД - МГНОВЕННЫЕ ВЫПЛАТЫ</h1>
      <section className={cls.home__section}>
        <img className={cls.section_img} src="https://www.highcalibervisuals.com/wp-content/uploads/2019/11/Web-Designing.png" alt="" />
        <Link className={cls.home__button} to={'/register'}>НАЧАТЬ ЗАРАБАТЫВАТЬ!</Link>
        <div className={cls.section_info}>

          <div className={cls.section_info_block}>
            <IoShieldCheckmark className={cls.block_icon} />
            <h1 className={cls.block_title}>БЕЗОПАСНОСТЬ И ЗАЩИТА</h1>
            <p className={cls.block_subtitle}>Платформа защищена самыми передовыми средствами шифровальных протоколов и надёжно хранит анонимность всех Ваших данных.</p>
          </div>
          
          <div className={cls.section_info_block}>
            <IoWalletOutline className={cls.block_icon} />
            <h1 className={cls.block_title}>МГНОВЕННЫЕ ВЫПЛАТЫ</h1>
            <p className={cls.block_subtitle}>Больше не нужно ждать - всего один щелчок мыши и Ваша выплата моментально зачислена на указанные платёжные реквизиты.</p>
          </div>

          <div className={cls.section_info_block}>
            <IoChatbubblesOutline className={cls.block_icon} />
            <h1 className={cls.block_title}>СЛУЖБА ПОДДЕРЖКИ 24/7</h1>
            <p className={cls.block_subtitle}>Наши отзывчивые операторы круглосуточно находятся на связи и всегда рады Вам помочь. Для быстрого решения вопроса обратитесь в Telegram</p>
          </div>

          <div className={cls.section_info_block}>
            <IoDiamondOutline className={cls.block_icon} />
            <h1 className={cls.block_title}>ПРЕДЛОЖЕНИЯ</h1>
            <p className={cls.block_subtitle}>Различные варианты рекламы, которые помогут вам раскрутить ваши интеренет ресурсы быстро и не дорого.</p>
          </div>

        </div>
      </section>
    </div>
  )
}