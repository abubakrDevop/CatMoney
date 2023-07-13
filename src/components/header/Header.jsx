import React, { useState, useEffect } from 'react'
import cls from './Header.module.scss'
import user from '../../assets/img/user.svg'
import { Link, NavLink } from 'react-router-dom'
import loginIn from '../../assets/img/loginIn.png'
import bars from '../../assets/img/bars.png'
import xMark from '../../assets/img/xMark.png'

const Header = () => {
    //variables
    const registered = localStorage.getItem('registered')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [isActive, setIsActive] = useState(false)

    //mobile width meter "1110px"
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    //handlers
    const setIsActiveHandler = () => {
        setIsActive(true)
    }

    const setIsNotActiveHandler = () => {
        setIsActive(false)
    }

    return (
        <header className={cls.header}>
            <Link to="/" className={cls.logoText}>
                <span>CAT</span>
                <span>MONEY</span>
            </Link>

            {
                screenWidth > 1110 && <div className={cls.headerButtons}>
                    <NavLink to="/about-us">О платформе</NavLink>
                    <NavLink to="/tasks">Задания</NavLink>
                    <NavLink>Исполнителям</NavLink>
                    <NavLink>Заказчикам</NavLink>
                </div>
            }

            {
                isActive && <div className={cls.dropDownPonel}>
                    <NavLink onClick={setIsNotActiveHandler} to="/about-us">О платформе</NavLink>
                    <NavLink onClick={setIsNotActiveHandler} to="/tasks">Задания</NavLink>
                    <NavLink onClick={setIsNotActiveHandler}>Исполнителям</NavLink>
                    <NavLink onClick={setIsNotActiveHandler}>Заказчикам</NavLink>
                </div>
            }

            <div className={cls.buttons}>
                {
                    registered === 'ok' ? (
                        <Link to='/profile'  className={cls.goProfile} >
                            <img src={user} alt="profile"/>
                        </Link>
                    ) : (
                        <Link to="/register" className={cls.signUp}>
                            {screenWidth < 1110
                                ? <img src={loginIn} className={cls.mobileLogin} alt="sign up" />
                                : <img src={user} alt="sign up" />
                            }
                            {screenWidth > 1110 && <span>войти</span>}
                        </Link>
                    )}
                {
                    screenWidth < 1110 && <div className={cls.bars}>
                        {isActive
                            ? <img src={xMark} onClick={setIsNotActiveHandler} />
                            : <img src={bars} onClick={setIsActiveHandler} />
                        }

                    </div>
                }
            </div>


        </header>
    )
}

export default Header
