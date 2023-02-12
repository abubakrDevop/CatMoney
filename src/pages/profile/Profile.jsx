import React from "react";
import cls from '../profile/Profile.module.scss'
import { Routes, Route, NavLink } from 'react-router-dom'
import  { 
          IoPersonOutline, 
          IoCogOutline,
          IoWalletOutline,
          IoShareSocialOutline,
          IoChatbubblesOutline
        } from 'react-icons/io5'

export const Profile = () => {

  const items = [
    {
      id: 1,
      to: 'own-space',
      icon: <IoPersonOutline />
    },
    {
      id: 2,
      to: 'settings',
      icon: <IoCogOutline />
    },
    {
      id: 3,
      to: 'wallet',
      icon: <IoWalletOutline />
    },
    {
      id: 4,
      to: 'chat',
      icon: <IoChatbubblesOutline />
    },
    {
      id: 5,
      to: 'share',
      icon: <IoShareSocialOutline />
    },
  ]

  return (
    <div className={cls.profile}>
      <div className={cls.profile_menu}>
        {
          items.map(item => (
            <div key={item.id} className={cls.menu_items}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => isActive ? 
                `${cls.menu_items_icon} ${cls.icon_active}` 
                : 
                cls.menu_items_icon} 
              > 
                {item.icon} 
              </NavLink>
            </div>
          ))
        }
      </div>

      <Routes>
        <Route path="own-space" element={''} /> 
        <Route path="settings" element={''} /> 
        <Route path="wallet" element={''} /> 
        <Route path="share" element={''} /> 
      </Routes>

    </div>
  )
}