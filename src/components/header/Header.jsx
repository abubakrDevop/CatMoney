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
    const [isMobile, setIsMobile] = useState(false)
    const [isActive, setIsActive] = useState(false)

    //phone width meter
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1110) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
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
                !isMobile && <div className={cls.headerButtons}>
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
                        <div></div>
                    ) : (
                        <Link to="/register" className={cls.signUp}>
                            {isMobile
                                ? <img src={loginIn} className={cls.mobileLogin} alt="sign up" />
                                : <img src={user} alt="sign up" />
                            }
                            {!isMobile && <span>войти</span>}
                        </Link>
                    )}
                {
                    isMobile && <div className={cls.bars}>
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
