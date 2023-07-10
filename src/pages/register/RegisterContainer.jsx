import React from 'react'
import { connect } from 'react-redux'
import { authUser } from '../../store/userData'
import { Register } from './Register'

const RegisterContainer = ({ authError, authUser }) => {
    return <Register authUser={authUser} authError={authError} />
}

const mapStateToProps = (state) => {
    return {
        authError: state.userData.userData.authError
    }
}

const mapDispatchToProps = {
    authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
