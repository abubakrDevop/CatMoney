import React from 'react'
import { connect } from 'react-redux'
import SignUp from './SignUp'
import { registerUser } from '../../../store/userData'

const SignUpContainer = ({ registerError, registerUser }) => {
    return <SignUp registerError={registerError} registerUser={registerUser} />
}

const mapStateToProps = (state) => {
    return {
        registerError: state.userData.userData.registerError
    }
}

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
