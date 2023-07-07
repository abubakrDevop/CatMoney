import cls from '../register/Register.module.scss'

export const Register = () => {

  return (
    <div className={cls.register}>
      <div className={cls.registerBlock}>

        <h3>Добро пожаловать</h3>
        <span className={cls.welcome}>Добро пожаловать! Пожалуйста, введите свои данные.</span>

        <form>
          <div className={cls.email}>
            <p>Login</p>
            <input type="text" placeholder='Введите свой login' />
          </div>

          <div className={cls.password}>
            <p>Password</p>
            <input type="password" placeholder='Введите свой пароль' />
          </div>

          <a href='' className={cls.forgotPassword} >Забыл пароль</a><br />
          <button className={cls.signUp}>войти</button>
        </form>

        <div className={cls.loginIn}>
          <span>Нету акаунта? <a href="">Зарегестрироватся</a></span>
        </div>

      </div>

      <div className={cls.logoBlock}>
        <div className={cls.around}>
          <p><span>cat</span> money</p>
          <div className={cls.filter}></div>
        </div>


      </div>

    </div>
  )
}
