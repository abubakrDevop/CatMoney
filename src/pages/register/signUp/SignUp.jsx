import { useEffect } from 'react'
import cls from './SignUp.module.scss'
import { registerAPI } from '../../../dal/api'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../../common/inputField'

const Register = () => {

  const SignupSchema = Yup.object().shape({
    Login: Yup.string()
      .min(3, 'Login не может иметь меньше 3 символов!')
      .max(16, 'Login не может иметь больше 16 символов!')
      .required('Login обязательное поле!'),

    Email: Yup.string()
      .required('Email обязательное поле!')
      .email('Введите корректный Email'),

    Password: Yup.string()
      .required('Password обязательное поле!')
      .min(6, 'Пароль не может быть короче 6 символов!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).*$/,
        'Пароль должен содержать только латинские буквы и цифры.'),

    RepeatPassword: Yup.string()
      .required('Repeat password обязательное поле!')
      .oneOf([Yup.ref('Password')], 'Пароли не совпадают!')

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
            Email: '',
            Password: '',
            RepeatPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >

          {({ values, errors, touched, handleChange }) => (
            <Form>
              <div className={cls.login}>
                <InputField
                  text={'Login'}
                  error={errors.Login}
                  touched={touched.Login}
                  type={'text'}
                  placeholder={'Придумайте login'}
                  name={'Login'}
                  onChange={handleChange}
                  value={values.Login} />
              </div>

              <div className={cls.email}>
                <InputField
                  text={'Email'}
                  error={errors.Email}
                  touched={touched.Email}
                  type={'email'}
                  placeholder={'Введите свой Email'}
                  name={'Email'}
                  onChange={handleChange}
                  value={values.Email} />
              </div>


              <div className={cls.password}>
                <InputField
                  text={'Password'}
                  error={errors.Password}
                  touched={touched.Password}
                  type={'password'}
                  placeholder={'Придумайте пароль'}
                  name={'Password'}
                  onChange={handleChange}
                  value={values.Password} />
              </div>

              <div className={cls.password}>
                <InputField
                  text={'Repeat password'}
                  error={errors.RepeatPassword}
                  touched={touched.RepeatPassword}
                  type={'password'}
                  placeholder={'Повторите пароль'}
                  name={'RepeatPassword'}
                  onChange={handleChange}
                  value={values.RepeatPassword} />
              </div>
              <button
                className={cls.signUp}
                type='submit'
                onAuxClick={handleSubmit}
              >войти</button>
            </Form>
          )}
        </Formik>

        <div className={cls.loginIn}>
          <span>Уже есть акаунт? <Link to='/register'>Войти</Link></span>
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

export default Register