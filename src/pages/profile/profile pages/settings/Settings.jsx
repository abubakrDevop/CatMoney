import React from "react";
import { useNavigate } from "react-router";
import cls from '../settings/Settings.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../../helpers/form/index'
import {  IoPersonOutline,
  IoAtCircleOutline,
  IoLockClosedOutline,
  IoWalletOutline,
          } from "react-icons/io5";
import { $api } from "../../../../helpers/constant/index";

export const Settings = () => {
  const navigate = useNavigate()
  // const [imageUrl, setImageUrl] = React.useState("")
  const [active, setActive] = React.useState(false)
  const [success, setSeccess] = React.useState(true)
  console.log(success)

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const idUser = JSON.parse(localStorage.getItem("regist"))

  const onSubmit = (data) => {
    const body = {
      id: idUser.id,
      login: data.login > '' ? data.login : null, 
      email: data.email > '' ? data.email : null, 
      password: data.password > '' ? data.password : null, 
      walletName: data.wallet > '' ? data.wallet : null, 
    }

    if (data.wallet.startsWith('P')) {
      $api
      .put("/User/update", body)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setSeccess(true)
          reset();
        } else {

        }
      })
      .catch((error) => {
        if (error.response.status === 401) {       
          localStorage.removeItem("regist");  
          localStorage.removeItem("auth");  
          navigate("/register")
        }
      });
      setActive(false)
    } else {
      setActive(true)
    }
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
          <div className={success === false ? cls.success : `${cls.success} ${cls.success_active}`}>Ваши данные успешно изменены!</div>
          <div className={cls.info_text}>
            Введите логин:
            <div className={cls.input_box}>
              <IoPersonOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('login', Form.Options.settings)}
              />
            </div>
          </div>
          <div className={cls.info_text}>
            Введите email:
            <div className={cls.input_box}>
              <IoAtCircleOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('email', Form.Options.settings)}
              />
            </div>
          </div>
          <div className={cls.info_text}>
            Введите пароль:
            <div className={cls.input_box}>
              <IoLockClosedOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}

                {...register('password', Form.Options.settings)}
              />
            </div>
          </div>
          <div className={cls.info_text}>
            Введите кошелёк:
            {
              formState.errors.wallet && <span className={cls.wallet_error}> {formState.errors.wallet.message} </span>
            }
            {
              active && <span className={cls.wallet_error} > Начинается с латинской 'P' !</span>
            }
            <div className={cls.input_box}>
              <IoWalletOutline className={cls.info_text_icon} />
              <input
                className={cls.info_text_input}
                placeholder="Example: P1234567890"
                {...register('wallet', Form.Options.settings)}
              />
            </div>
          </div>
          <button type="submit" className={cls.ownspace_changeinfo}>Применить изменения</button>
        </section>
      </section>
    </form>
  )
}