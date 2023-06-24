import cls from './Header.module.scss'
import user from '../../assets/img/user.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const registered = localStorage.getItem('registered')


    return (
        <header className={cls.header}>
            <Link to='/' className={cls.logoText}>
                <span>CAT</span>
                <span>MONEY</span>
            </Link>

            <div className={cls.headerButtons}>
                <NavLink to='/about-us'>О платформе</NavLink>
                <NavLink to='/tasks'>Задания</NavLink>
                <NavLink>Исполнителям</NavLink>
                <NavLink>Заказчикам</NavLink>

            </div>

            {
                registered === 'ok'
                    ? <div></div>
                    : <Link to='/register' className={cls.signUp}>
                        <img src={user} alt="sign up" />
                        <span >войти</span>
                    </Link>
            }

        </header>
    )
}

export default Header