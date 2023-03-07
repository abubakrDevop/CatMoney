import React from 'react'
import cls from '../register/Register.module.scss'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { SignIn } from './signIn/SignIn'
import { SignUp } from './signUp/SignUp'
import { SignRefUp } from "../register/signUp/SignRefUp";

export const Register = () => {
  const [active, setActive] = React.useState(false)

  const userRefId = localStorage.getItem("userLink")
  console.log("userRefId", userRefId);

  return (
    <div className={cls.register}>
      <label className={cls.register__label}>
        <input type="checkbox" className={cls.label_checkbox} />

        <div
          className={cls.label_navigator}
          onClick={() => setActive((prev) => !prev)}
        >
          <div className={cls.register_item}></div>
          <IoChevronForwardOutline
            className={
              active === true
                ? `${cls.label_icon} ${cls.label_icon_active}`
                : cls.label_icon
            }
          />
          <IoChevronForwardOutline
            className={
              active === true
                ? `${cls.label_icon} ${cls.label_icon_active}`
                : cls.label_icon
            }
          />
          <IoChevronForwardOutline
            className={
              active === true
                ? `${cls.label_icon} ${cls.label_icon_active}`
                : cls.label_icon
            }
          />
        </div>
      </label>

      <div className={cls.register_card}>
        <div
          className={
            active === false
              ? `${cls.register_face} ${cls.register_front}`
              : `${cls.register_face} ${cls.label_active_front}`
          }
        >
          <SignIn />
        </div>

        <div
          className={
            active === true
              ? `${cls.register_face} ${cls.register_back}`
              : `${cls.register_face} ${cls.label_active_back}`
          }
        >
          {userRefId ? <SignRefUp /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}