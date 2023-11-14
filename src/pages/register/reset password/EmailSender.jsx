import React from "react";
import cls from './Reset.module.scss'
import arrowLeft from '../../../assets/img/arrowLeft.png'
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import InputField from "../../../common/inputField";
import * as Yup from 'yup'

const EmailSender = () => {
  const navigate = useNavigate()
  const SignupSchema = Yup.object().shape({
    Email: Yup.string()
      .required('Email обязательное поле!')
      .email('Введите корректный Email'),

  })
  const handleSubmit = () => {
    navigate('/reset')
  }

  return (
    <>
      <div>
        <Link to='/register' className={cls.arrow}>
          <img src={arrowLeft} alt="arrow" />
        </Link>
      </div>

      <div className={cls.emailSender}>
        <h1>Подтверждение Email</h1>

        <div className={cls.forma}>
          <Formik
            initialValues={{
              Email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <div className={cls.email}>
                  <InputField
                    text={'Email'}
                    error={errors.Email}
                    touched={touched.Email}
                    type={'text'}
                    placeholder={'Введите ваш Email'}
                    name={'Email'}
                    onChange={handleChange}
                    value={values.Email} />
                </div>
                <button
                  className={cls.send}
                  type='submit'
                  onAuxClick={handleSubmit}
                >Отправить</button>
              </Form>
            )}
          </Formik>
        </div>

      </div>



    </>
  )
}

export default EmailSender