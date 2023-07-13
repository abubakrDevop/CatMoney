import React from "react";
import cls from './Reset.module.scss'
import arrowLeft from '../../../assets/img/arrowLeft.png'
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import InputField from "../../../common/inputField";
import * as Yup from 'yup'

const Reset = () => {
  const navigate = useNavigate()

  const SignupSchema = Yup.object().shape({
    EmailCod: Yup.string()
      .matches(/^[0-9]+$/, 'Ваш код должен содержать только цифры!')
      .min(4, 'Код не может содержать менее 4 символов!')
      .required('Вы забыли ввести код!'),

    Password: Yup.string()
      .required('Password обязательное поле!')
      .min(6, 'Пароль не может быть короче 6 символов!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).*$/,
        'Пароль должен содержать только латинские буквы и цыфры.'),

    RepeatPassword: Yup.string()
      .required('Repeat password обязательное поле!')
      .oneOf([Yup.ref('Password')], 'Пароли не совпадают!')
  })

  const handleSubmit = () => {
    navigate('/')
  }

  return (
    <>
      <div>
        <Link to='/email-sender' className={cls.arrow}>
          <img src={arrowLeft} alt="arrow" />
          <span>Назад</span>
        </Link>
      </div>

      <div className={cls.emailSender}>
        <h1>Сброс пароля</h1>

        <div className={cls.forma}>
          <Formik
            initialValues={{
              Password: '',
              RepeatPassword: '',
              EmailCod: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <div className={cls.password}>
                  <InputField
                    text={'New password'}
                    error={errors.Password}
                    touched={touched.Password}
                    type={'text'}
                    placeholder={'Придумайте новый пароль'}
                    name={'Password'}
                    onChange={handleChange}
                    value={values.Login} />
                </div>

                <div className={cls.repeatPassword}>
                  <InputField
                    text={'Repeat a new password'}
                    error={errors.RepeatPassword}
                    touched={touched.RepeatPassword}
                    type={'text'}
                    placeholder={'Повтарите пароль'}
                    name={'RepeatPassword'}
                    onChange={handleChange}
                    value={values.RepeatPassword} />
                </div>

                <div className={cls.email}>
                  <InputField
                    text={'Введите код из почты'}
                    error={errors.EmailCod}
                    touched={touched.EmailCod}
                    type={'text'}
                    placeholder={'Введите код из почты'}
                    name={'EmailCod'}
                    onChange={handleChange}
                    value={values.EmailCod}
                    maxLenght={4}
                  />
                </div>

                <button
                  className={cls.send}
                  type='submit'
                  onAuxClick={handleSubmit}
                >Сбросить</button>
              </Form>
            )}
          </Formik>
        </div>

      </div>



    </>
  )
}

export default Reset