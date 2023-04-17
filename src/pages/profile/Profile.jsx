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
import { Ownspace } from "./profile pages/own-space/Own_space";
import { Settings } from "./profile pages/settings/Settings";
import { Wallet } from "./profile pages/wallet/Wallet";
import { Chat } from "./profile pages/chat/Chat";
import { Share } from "./profile pages/share/Share";

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
        <Route index element={<Ownspace />} />
        <Route path="own-space" element={<Ownspace />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="chat" element={<Chat />} />
        <Route path="share/*" element={<Share />} />
      </Routes>

    </div>
  )
}