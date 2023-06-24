import cls from './Footer.module.scss'
import fasebook from '../../assets/img/fasebook.jpg'
import wk from '../../assets/img/wk.png'
import instagram from '../../assets/img/instagram.jpg'
import twitter from '../../assets/img/twitter.jpg'
import telegram from '../../assets/img/telegram.jpg'
import watsup from '../../assets/img/watsup.jpg'

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div>
        <div className={cls.logoText}>
          <span>CAT</span>
          <span>MONEY</span>
        </div>
        <p className={cls.allRightsReserved}>© 2023 CatMoney. Все права защищены.</p>
      </div>

      <div>
        <div className={cls.socialNetworks}>
          <a href="#"><img src={fasebook} alt="fasebook" /></a>
          <a href="#"><img src={wk} alt="wk" /></a>
          <a href="#"><img src={instagram} alt="instagram" /></a>
          <a href="#"><img src={twitter} alt="twitter" /></a>
          <a href="#"><img src={telegram} alt="telegram" /></a>
          <a href="#"><img src={watsup} alt="watsup" /></a>
        </div>
        <a href="#" className={cls.securityPolicy}>Политика обработки персональных данных</a>
      </div>
    </footer>
  )
}

export default Footer