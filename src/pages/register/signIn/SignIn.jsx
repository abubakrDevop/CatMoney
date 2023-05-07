import React from "react";
import { useNavigate } from "react-router";
import cls from '../signIn/SignIn.module.scss'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
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
  const [loginError, setLoginError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState('')
  let navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("regist"));
  console.log(userId.id)
  const { id } = userId
  const body = {
    id: userId.id
  }

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
    }

    $api
      .post("/User/auth", body)
      .then((res) => {
        if (res.status === 200) {
          reset();
          localStorage.setItem("auth", JSON.stringify(res.data));
          localStorage.setItem("regist", JSON.stringify(res.data));
          localStorage.setItem("registered", 'ok');
          navigate("/profile/own-space");
          window.location.reload();
        }
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 400) {
          reset();
          setLoginError(true);
        }
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
          loginError && <span className={cls.root_error}> Не верный логин или пароль! </span>
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
        <Link 
          to={'/reset'} 
          onClick={() => {
            $api
              .post("/User/resetPassword", {userId: userId.id})
              .then(res => {
                console.log(res)
              })
              .catch(res => {});
          }} 
          className={cls.root_password_reset}>
          Забыли пароль?
        </Link>
        <p className={cls.title}>Продолжая вы даете согласие на обработку персональных данных!</p>

      </form>
  )
}