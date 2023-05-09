import React from "react";
import cls from '../about-us/About.module.scss'

export const About = () => {
  return (
    <div className={cls.about}>

      <section className={cls.about_section}>
        <h1 className={cls.section_head_title}>О главном</h1>
        <p className={cls.section_title}>
          Сайт 
          <span className={cls.section_title_span_font}>
            <span className={cls.section_title_span}> Cat</span>Money.com 
          </span>
          предлагает вам заработать или раскрутить свой сайт/группу/бизнес выгодно и недорого. 
          После регистрации вам необходимо указать кошелек в настройках и вы сможете спокойно начать зарабатывать или раскручивать свои сервисы. 
          На данный момент времени это демо версия сайта и из основного функционала здесь.
        </p>

        <ul className={cls.section_ul}>
          <li className={cls.section_li}>
            Возможность создавать сёрфинг 'ссылка на ваш сайт/группу или другой бизнес который нужно раскрутить'
          </li>
          <li className={cls.section_li}>
            Управление уже созданными сёрфинг-задачами. Пополнить баланс вашего сёрфинга или остановить его
          </li >
          <li className={cls.section_li}>
            Так же предлагается заработать деньги выполняя этот самый сёрфинг от других пользователей
          </li>
        </ul>

        <p className={cls.section_title}>В следующем обновлении появиться:</p>

        <ul className={cls.section_ul}>
          <li className={cls.section_li}>
            Введение внутренней валюты "CatCoin"
          </li>
          <li className={cls.section_li}>
            Возможность играть в лотерею и выигрывать призы! (игра в лотерею доступна благодаря CatCoin)
          </li>
          <li className={cls.section_li}>
            Добавятся новые задания и более обширные/гибкие возможности для развития вашего бизнеса.
          </li>
          <li className={cls.section_li}>
            Появиться возможность выводить свои задания в топ, помечать их как VIP и выделять специальными цветами для лучшей видимости среди остальных
          </li>
        </ul>
      </section>

      <section className={cls.about_section}>
        <h1 className={cls.section_head_title}>Инвестиции</h1>
        <p className={cls.section_title}>
          Так же у вас уже имеется возможность заработать на пассиве, если вы вложите любую сумму нашему сайту как инвестиции, тем самым вы станете 10% обладателем нашего сайта и мы будем начислять вам процент от нашей общей прибыли на протяжении месяца. 
          Для этого вам необходимо сделать перевод на P1094302568
          <br/>
          и в комментарии к переводу написать 
          "
          <span className={cls.section_title_span_font}>
            <span className={cls.section_title_span}> Cat</span>Money
          </span>
          ".
          Вы можете перевести любое количество денежных средств, любая поддержка приветствуется. 
          Чем больше денежных средств вы переведёте, тем больше процентов получите от нашей прибыли. За дополнительными вопросами обращайся в поддержку
          <br/>
          <a href=" ">@CAtMoneysupport_bot</a>
        </p>
      </section>

      <section className={cls.about_section}>
        <h1 className={cls.section_head_title}> </h1>
        <p className={cls.section_title}></p>
      </section>

      <section className={cls.about_section}>
        <h1 className={cls.section_head_title}> </h1>
        <p className={cls.section_title}></p>
      </section>

    </div>
  )
}