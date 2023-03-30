import React from "react";
import cls from '../settings/Settings.module.scss'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { Form } from '../../../../helpers/form/index'
import { IoDownloadOutline } from "react-icons/io5";
import { $api } from "../../../../helpers/constant/index";

export const Settings = () => {
  // const [imageUrl, setImageUrl] = React.useState("")

  const {
    reset,
    register,
    handleSubmit,
  } = useForm()

  const idUser = JSON.parse(localStorage.getItem("regist"))
  console.log('idUser', idUser.id)

  const onSubmit = (data) => {
    const body = {
      id: idUser.id,
      // image: imageUrl,
      // name: data.name,
      // lastname: data.lastname,
      login: data.login,
      email: data.email,
      password: data.password,
      mode: 1,
      wallet: data.wallet
    }

    $api
      .post("/api/v2/settings", body)
      .then((res) => {
        console.log(res);
        if (res.data.status === "") {
          reset();
        } else if (res.data.status === "") {
          reset();
        } else if (res.data.status === "") {
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const fileReader = new FileReader()
  // fileReader.onloadend = () => {
  //   setImageUrl(fileReader.result)
  // }

  // function handleFiles(e) {
  //   e.preventDefault()
  //   const file = e.target.files[0]
  //   fileReader.readAsDataURL(file)
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.ownspace}>
      {/* <section className={cls.ownspace_headsection}>
        <section className={cls.ownspace_section}>
          <div className={cls.section_imgbox}>
            <img src={imageUrl} alt="" className={cls.section_img} />
            <input type="file" id='file' className={cls.section_file} onChange={handleFiles} />
            <label htmlFor="file" className={cls.section_label}>
              Загрузить <IoDownloadOutline className={cls.section_icon} />
            </label>
          </div>
          <section className={cls.section_namebox}>
            <div className={cls.ownspace_namebox_in}> Имя:
              <input
                className={cls.section_name}
                {...register('name', Form.Options.settings)}
              />
            </div>
            <div className={cls.ownspace_namebox_in}> Фамилия:
              <input
                className={cls.section_name}
                {...register('lastname', Form.Options.settings)}
              />
            </div>
          </section>
        </section>
      </section> */}

      <section className={cls.ownspace_headsection}>
        {/* <div className={cls.section_aboutbox}>
          <textarea
            className={cls.section_about}
            {...register('about', Form.Options.settings)}
          />
        </div> */}

        <section className={cls.ownspace_info}>
          <p className={cls.info_text}>
            Введите логин:
            <input
              className={cls.info_text_input}

              {...register('login', Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Введите email:
            <input
              className={cls.info_text_input}

              {...register('email', Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Введите пароль:
            <input
              className={cls.info_text_input}

              {...register('password', Form.Options.settings)}
            />
          </p>
          <p className={cls.info_text}>
            Введите кошелёк:
            <input
              className={cls.info_text_input}

              {...register('wallet', Form.Options.settings)}
            />
          </p>
          <button type="submit" className={cls.ownspace_changeinfo}>Применить изменения</button>
        </section>
      </section>
    </form>
  )
}