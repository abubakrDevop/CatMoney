import cls from '../Main/Main.module.scss'
import { useDispatch } from "react-redux";
import manInStartPage from '../../assets/img/manInStartPage.jpg'
import arrows from '../../assets/img/arrows.png'
import securityRisk from '../../assets/img/securityRisk.svg'
import payInMoment from '../../assets/img/payInMoment.svg'
import ofer from '../../assets/img/ofer.svg'
import helpAllTheTime from '../../assets/img/helpAllTheTime.svg'


export const Main = () => {
  return (
    <div className={cls.startPage}>
      <div style={{ display: 'flex' }}>
        <div className={cls.mainText}>
          <div className={cls.shadow}></div>
          <span className={cls.purple}>Зарабатывай</span>
          <span>деньги выполняя</span>
          <span><span className={cls.purple}>простые</span> <span>задания</span></span>
          <p>Начинай выводить деньги после первого<br /> выполненного задания</p>
          <div className={cls.buttons}>
            <button>Начать зарабатывать</button>
            <button>Создать задание</button>
          </div>
        </div>

        <div className={cls.manInStartPage}>
          <img src={manInStartPage} alt="" ></img>
          <div className={cls.manShanow}></div>
        </div>
      </div>

      <div className={cls.aboutCompanuInNumbers}>
        <div className={cls.aboutCompanuInNumbersText}>
          <p>О платформе </p>
          <p>в цифрах</p>
        </div>

        <div style={{ display: 'flex' }} >
          <div className={cls.numberAndArrow}>
            <span>1000+</span>
            <p>Заказчиков</p>
            <img src={arrows} />
          </div>

          <div className={cls.quantity}>
            <span>50+</span>
            <p>Задач ежедневно</p>

          </div>

          <div className={cls.quantity}>
            <span>175 350</span>
            <p>Рублей уже выплачено</p>

          </div>

        </div>
      </div>

      <div className={cls.whyYouCanTrustUs}>
        <div className={cls.whyText}>
          <p>Почему нам можно </p>
          <p>доверять? <span className={cls.purple}>Всё просто</span></p>
        </div>

        <div className={cls.whyBlocks}>
          <div className={cls.whyShell}>
            <div className={cls.whyBlock}>
              <img src={securityRisk} alt="Безопасность и защита" />
              <div className={cls.whyTextBlock}>
                <span>Безопасность и защита</span>
                <p>Платформа защищена самыми передовыми </p>
                <p>средствами шифровальных протоколов и надёжно</p>
                <p>хранит анонимность всех Ваших данных.</p>
              </div>
            </div>
            <div className={cls.whyBlock}>
              <img src={payInMoment} alt="Выплачиваем мгновенно" />
              <div className={cls.whyTextBlock}>
                <span>Выплачиваем мгновенно</span>
                <p>Наша цель - сделать заработок в интернете</p>
                <p>реальным, чтоб каждый, кто захотел</p>
                <p>заработать, мог без затруднений сделать это</p>
              </div>
            </div>
          </div>

          <div className={cls.whyShell}>
            <div className={cls.whyBlock}>
              <img src={ofer} alt="Предложения" />
              <div className={cls.whyTextBlock}>
                <span>Предложения</span>
                <p>Различные варианты рекламы, которые помогут</p>
                <p>вам раскрутить ваши интеренет ресурсы быстро</p>
                <p>и не дорого.</p>
              </div>
            </div>

            <div className={cls.whyBlock}>
              <img src={helpAllTheTime} alt="Помогаем 24/7" />
              <div className={cls.whyTextBlock}>
                <span>Помогаем 24/7</span>
                <p>Наши отзывчивые операторы круглосуточно находятся</p>
                <p>на связи и всегда рады Вам помочь. Для быстрого</p>
                <p>решения вопроса обратитесь в Telegram</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Main