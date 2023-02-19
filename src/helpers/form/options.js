import { emailReg, passwordReg } from "./regex"

export const required = 'Это поле не может быть пустым!'

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email не валиден!'
    }
}

export const password = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Только латинские буквы и цифры!'
    },
    minLength: {
        value: 8,
        message: 'Пароль должень быть больше 8 цифр!'
    }
}

export const allInputs = {
    required,
    pattern: {
        message: 'Только латинские буквы!',
        value: passwordReg,
    }
}

export const settings = {
    pattern: {
        value: false,
    }
}