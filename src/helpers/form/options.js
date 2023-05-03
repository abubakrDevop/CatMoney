import { emailReg, passwordReg, onlyNumbers } from "./regex"

export const required = 'Это поле не может быть пустым!'

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email не валиден!',
    }
}

export const password = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Только латинские буквы и цифры!',
    },
    minLength: {
        value: 8,
        message: 'Пароль должень быть больше 8 цифр!',
    }
}

export const emailCod = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Только латинские буквы и цифры!',
    },
    minLength: {
        value: 4,
        message: 'Код должень быть больше 4 цифр!',
    }
}

export const onlyNum = {
    required,
    pattern: {
        value: true,
    },
    minLength: {
        value: 4,
        message: 'Содержимое должно быть больше 4 цифр!',
    }
}

export const numbers = {
    required,
    pattern: {
        value: onlyNumbers,
        message: 'Только цифры!',
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

export const moneyInputs = {
    pattern: {
        value: true,
    }
}