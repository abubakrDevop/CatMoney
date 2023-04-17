import React from "react";
import { useNavigate } from "react-router";
import cls from '../signIn/SignIn.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../../helpers/form/index'
import { $api } from "../../../helpers/constant/index";
import  {
          IoEyeOffOutline,
          IoEyeOutline,
          IoLockClosedOutline,
          IoPersonOutline,
        } from 'react-icons/io5'

export const SignIn = () => {
  const [active, setActive] = React.useState(false)
  const [loginError, setLoginError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  let navigate = useNavigate();

  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      login: data.login,
      password: data.password,
      mode: 1,
    }

    $api
      .post("/api/users/v2/auth", body)
      .then((res) => {
        if (res.data.status === "Логин введён неверно") {
          reset();
          setLoginError(res.data.status);
        } else if (res.data.status === "Пароль неверный!") {
          reset();
          setPasswordError(res.data.status);
        } else if (res.data.status === "200") {
          reset();
          localStorage.setItem("auth", JSON.stringify(res.data));
          localStorage.setItem("regist", JSON.stringify(res.data));
          window.location.reload();
          navigate("/profile/own-space");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/v1/counter')
  //    .then((res) => console.log(res) )
  //    .catch(error => {
  //     console.log(error)
  //   })
  // }, [])

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={cls.root__form}>
        <h1 className={cls.headtitle}>Вход</h1>

        {
          formState.errors.login && <span className={cls.root_error}> {formState.errors.login.message} </span>
        }
        {
          loginError && <span className={cls.root_error}> {loginError} </span>
        }

        <div className={cls.form_inputbox}>
          <IoPersonOutline className={cls.input_icon} />
          <input
            className={cls.form_input}
            type="text"
            placeholder="Введите логин..."
            {...register('login', Form.Options.allInputs)}
          />
        </div>

        {
          formState.errors.password && <span className={cls.root_error}> {formState.errors.password.message} </span>
        }
        {
          passwordError && <span className={cls.root_error}> {passwordError} </span>
        }

        <div className={cls.form_inputbox}>
          <IoLockClosedOutline className={cls.input_icon} />
          <input
            className={cls.form_input}
            type={active === false ? 'password' : 'text'}
            placeholder="Введите пароль..."
            {...register('password', Form.Options.password)}
          />
          {
            active === false ?
            <IoEyeOffOutline
              className={cls.input_eye}
              onClick={() => setActive(true)}
            />
            :
            <IoEyeOutline
              className={cls.input_eye}
              onClick={() => setActive(false)}
            />
          }
        </div>

        <button type="submit" className={cls.root__button}>Войти</button>
        <p className={cls.title}>Продолжая вы даете согласие на обработку персональных данных!</p>

      </form>
  )
}