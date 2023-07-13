import cls from '../register/Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import InputField from '../../common/inputField'
import * as Yup from 'yup'
import eyeSlash from '../../assets/img/eye-slash.png'
import eye from '../../assets/img/eye.png'
import { useState } from 'react'

export const Register = ({ authError, authUser }) => {
  const [isPasswordEye, setIsPasswordEye] = useState(false)
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    Login: Yup.string()
      .min(3, 'Login не может иметь меньше 3 символов!')
      .max(16, 'Login не может иметь больше 16 символов!')
      .required('Login обязательное поле!'),

    Password: Yup.string()
      .required('Password обязательное поле!')
      .min(6, 'Пароль не может быть короче 6 символов!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).*$/,
        'Пароль должен содержать только латинские буквы и цыфры.'),
  })

  const handleSubmit = (values) => {
    const userData = {
      login: values.Login,
      password: values.Password
    }

    authUser(userData)
    !authError && navigate('/')
  }

  return (
    <div className={cls.register}>
      <div className={cls.registerBlock}>

        <h3>Добро пожаловать</h3>
        <span className={cls.welcome}>Добро пожаловать! Пожалуйста, введите свои данные.</span>

        {authError && <div className={cls.authError}>{authError}</div>}

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
                  type={isPasswordEye ? 'text' : 'password'}
                  placeholder={'Придумайте пароль'}
                  name={'Password'}
                  onChange={handleChange}
                  value={values.Password} />

                {isPasswordEye
                  ? <img className={cls.eye} onClick={() => setIsPasswordEye(false)} src={eye} />
                  : <img className={cls.eye} onClick={() => setIsPasswordEye(true)} src={eyeSlash} />
                }

              </div>

              <Link to='/email-sender' className={cls.forgotPassword}>Забыл пароль</Link><br />
              <button
                className={cls.signUp}
                type='submit'
                onAuxClick={handleSubmit}
              >Войти</button>
            </Form>
          )}
        </Formik>

        <div className={cls.loginIn}>
          <span>Нет акаунта? <Link to='/sign-up'>Зарегестрироватся</Link></span>
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
