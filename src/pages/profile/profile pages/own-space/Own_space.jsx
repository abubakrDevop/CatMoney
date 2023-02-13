import React from "react";
import cls from '../own-space/Own_space.module.scss'

export const Ownspace = () => {
  return (
    <div className={cls.ownspace}>
      <section className={cls.ownspace_section}>
        <img className={cls.section_img} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
        <section className={cls.section_namebox}>
          <div className={cls.ownspace_namebox_in}> Имя:
            <h1 className={cls.section_name}>Alex</h1>
          </div>
          <div className={cls.ownspace_namebox_in}> Фамилия:
            <h1 className={cls.section_name}>Kendal</h1>
          </div>
        </section>
      </section>
      <section className={cls.ownspace_section}>
        <div className={cls.section_aboutbox}>
          <h1 className={cls.section_about}> Обо мне! </h1>
        </div>
      </section>
    </div>
  )
} 