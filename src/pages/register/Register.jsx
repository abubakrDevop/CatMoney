import { useEffect } from 'react'
import cls from '../register/Register.module.scss'
import { registerAPI } from '../../dal/api'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import InputField from '../../common/inputField'
import * as Yup from 'yup'

export const Register = () => {

  const SignupSchema = Yup.object().shape({
    Login: Yup.string()
      .min(3, 'Login не может иметь меньше 3 символов!')
      .max(16, 'Login не может иметь больше 16 символов!')
      .required('Login обезательное поле!'),

    Password: Yup.string()
      .required('Password обязательное поле!')
      .min(6, 'Пароль не может быть короче 6 символов!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).*$/,
        'Пароль должен содержать только латинские буквы и цифры.'),
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className={cls.register}>
      <div className={cls.registerBlock}>

        <h3>Добро пожаловать</h3>
        <span className={cls.welcome}>Добро пожаловать! Пожалуйста, введите свои данные.</span>

        <Formik
          initialValues={{
            Login: '',
            Password: '',

          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >

          {({ values, errors, touched, handleChange }) => (
            <Form>
              <div className={cls.email}>
                <InputField
                  text={'Login'}
                  error={errors.Login}
                  touched={touched.Login}
                  type={'text'}
                  placeholder={'Введите свой login'}
                  name={'Login'}
                  onChange={handleChange}
                  value={values.Login} />
              </div>

              <div className={cls.password}>
                <InputField
                  text={'Password'}
                  error={errors.Password}
                  touched={touched.Password}
                  type={'password'}
                  placeholder={'Введите свой пароль'}
                  name={'Password'}
                  onChange={handleChange}
                  value={values.Password} />
              </div>

              <Link to='/reset' className={cls.forgotPassword}>Забыл пароль</Link><br />
              <button
                className={cls.signUp}
                type='submit'
                onAuxClick={handleSubmit}
              >войти</button>
            </Form>
          )}
        </Formik>


        <div className={cls.loginIn}>
          <span>Нету акаунта? <Link to='/sign-up'>Зарегестрироватся</Link></span>
        </div>

      </div>

      <div className={cls.logoBlock}>
        <div className={cls.around}>
          <p><span>cat</span> money</p>
          <div className={cls.filter}></div>
        </div>


      </div>

    </div>
  )
}
