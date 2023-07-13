import cls from './inputField.module.scss'

const InputField = ({ text, error, touched, type, placeholder, name, onChange, value, maxLenght=1000000000 }) => {
    return (
        <>
            <p>{text}</p>
            <input
                className={error && touched && error ? cls.inputError : null}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                maxLength={maxLenght}
            />
            <p className={cls.error}>{error && touched && error}</p>
        </>
    )
}

export default InputField