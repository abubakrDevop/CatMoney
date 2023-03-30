import cls from "./SignRefUp.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Form } from "../../../helpers/form/index";
import { $api } from "../../../helpers/constant/index";
import {
  IoAtOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockClosedOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useState } from "react";

export const SignRefUp = () => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const { formState, reset, register, handleSubmit } = useForm();

  const refUserId = localStorage.getItem("userLink")

  console.log("refUserId", refUserId);

  const onSubmit = (data) => {
    const body = {
      login: data.login,
      email: data.email,
      password: data.password,
      mode: 1,
      ref: Number(refUserId),
    };

    console.log("refBody", body)

    $api
      .post("/api/users/v2/register", body)
      .then((res) => {
        console.log(res);
        if (res.data.status === "200") {
          reset();
          localStorage.setItem("regist", JSON.stringify(res.data));
          localStorage.removeItem("userLink", JSON.stringify(res.data));
          navigate("/profile/own-space");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else if ("Такой пользователь уже зарегистрирован!") {
          reset();
          setError(res.data.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.root__form}>
      <h1 className={cls.headtitle}>Регистрация Ref</h1>

      {formState.errors.login && (
        <span className={cls.root_error}>
          {" "}
          {formState.errors.login.message}{" "}
        </span>
      )}
      {error && <span className={cls.root_error}> {error} </span>}

      <div className={cls.form_inputbox}>
        <IoPersonOutline className={cls.input_icon} />
        <input
          className={cls.form_input}
          type="text"
          placeholder="Придумайте логин..."
          {...register("login", Form.Options.allInputs)}
        />
      </div>

      {formState.errors.email && (
        <span className={cls.root_error}>
          {" "}
          {formState.errors.email.message}{" "}
        </span>
      )}

      <div className={cls.form_inputbox}>
        <IoAtOutline className={cls.input_icon} />
        <input
          className={cls.form_input}
          type="email"
          placeholder="Введите email..."
          {...register("email", Form.Options.email)}
        />
      </div>

      {formState.errors.password && (
        <span className={cls.root_error}>
          {" "}
          {formState.errors.password.message}{" "}
        </span>
      )}

      <div className={cls.form_inputbox}>
        <IoLockClosedOutline className={cls.input_icon} />
        <input
          className={cls.form_input}
          type={active === false ? "password" : "text"}
          placeholder="Придумайте пароль..."
          {...register("password", Form.Options.password)}
        />
        {active === false ? (
          <IoEyeOffOutline
            className={cls.input_eye}
            onClick={() => setActive(true)}
          />
        ) : (
          <IoEyeOutline
            className={cls.input_eye}
            onClick={() => setActive(false)}
          />
        )}
      </div>

      <button className={cls.root__button}>Зарегистрироваться</button>
      <p className={cls.title}>
        Продолжая вы даете согласие на обработку персональных данных!
      </p>
    </form>
  );
};
