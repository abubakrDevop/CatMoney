import cls from './inputField.module.css'

const InputField = ({ text, error, touched, type, placeholder, name, onChange, value }) => {
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
            />
            <p className={cls.error}>{error && touched && error}</p>
        </>
    )
}

export default InputField