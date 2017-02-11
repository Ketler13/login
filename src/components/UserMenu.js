import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LogInForm from './LogInForm'
import RegistrationForm from './RegistrationForm'
import { checkUserData, saveNewUser } from '../AC'

function UserMenu(props) {
    const { isGuest } = props.logIn
    const logInForm = isGuest && <LogInForm {...props.logIn} checkUserData = {props.checkUserData}/>
    const registrationForm = isGuest && <RegistrationForm {...props.registration} saveNewUser = {props.saveNewUser}/>

    return (
        <div>
            {logInForm}
            {registrationForm}
        </div>
    )
}

export default connect(state => {
    const { isGuest, checking, errorMessage,
            newUserIsChecking, newUserErrorMessage } = state.user
    return {
        logIn: {
            isGuest, checking, errorMessage
        },
        registration: {
            newUserIsChecking, newUserErrorMessage
        }
    }
}, {checkUserData, saveNewUser})(UserMenu)
