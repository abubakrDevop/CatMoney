import cls from './SignUp.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../../common/inputField'
import eyeShash from '../../../assets/img/eye-slash.png'
import eye from '../../../assets/img/eye.png'
import { useState } from 'react'

export const SignUp = ({ registerError, registerUser }) => {
  const [isPasswordEye, setIsPasswordEye] = useState(false)
  const [isRepPasswordEye, setIsRepPasswordEye] = useState(false)
  const navigate = useNavigate();

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
        'Пароль должен иметь только латинские буквы и цыфры.'),

    RepeatPassword: Yup.string()
      .required('Repeat password обязательное поле!')
      .oneOf([Yup.ref('Password')], 'Пароли не совпадают!')

  })

  const handleSubmit = (values) => {
    const userData = {
      login: values.Login,
      email: values.Email,
      password: values.Password
    }
    registerUser(userData)
    !registerError && navigate('/')
  }

  return (
    <div className={cls.register}>
      <div className={cls.registerBlock}>

        <h3>Добро пожаловать</h3>
        <span className={cls.welcome}>Добро пожаловать! Пожалуйста, введите свои данные.</span>

        {registerError && <div className={cls.registerError}>{registerError}</div>}

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
                  type={isPasswordEye ? 'text' : 'password'}
                  placeholder={'Придумайте пароль'}
                  name={'Password'}
                  onChange={handleChange}
                  value={values.Password} />

                {isPasswordEye
                  ? <img className={cls.eye} onClick={() => setIsPasswordEye(false)} src={eye} />
                  : <img className={cls.eye} onClick={() => setIsPasswordEye(true)} src={eyeShash} />
                }

              </div>

              <div className={cls.password}>
                <InputField
                  text={'Repeat password'}
                  error={errors.RepeatPassword}
                  touched={touched.RepeatPassword}
                  type={isRepPasswordEye ? 'text' : 'password'}
                  placeholder={'Повторите пароль'}
                  name={'RepeatPassword'}
                  onChange={handleChange}
                  value={values.RepeatPassword} />

                {isRepPasswordEye
                  ? <img className={cls.eye} onClick={() => setIsRepPasswordEye(false)} src={eye} />
                  : <img className={cls.eye} onClick={() => setIsRepPasswordEye(true)} src={eyeShash} />
                }
              </div>
              <button
                className={cls.signUp}
                type='submit'
                onAuxClick={handleSubmit}
              >Зарегистрироваться</button>
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

export default SignUp




