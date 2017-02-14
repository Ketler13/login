import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LogInForm from './LogInForm'
import RegistrationForm from './RegistrationForm'
import { checkUserData, saveNewUser, logOut } from '../AC'

function UserMenu(props) {
    const { isGuest } = props.logIn
    const { newUserIsChecked } = props.registration
    const logInForm = isGuest && <LogInForm {...props.logIn} checkUserData = {props.checkUserData}/>
    const registrationForm = isGuest && !newUserIsChecked && <RegistrationForm {...props.registration} saveNewUser = {props.saveNewUser}/>
    const logOut = isGuest ? null : <button className = "header_button" onClick = {props.logOut}>Log out</button>

    return (
        <header className = "user_menu">
            {logInForm}
            {registrationForm}
            {logOut}
        </header>
    )
}

export default connect(state => {
    const { isGuest, checking, errorMessage,
            newUserIsChecking, newUserErrorMessage, newUserIsChecked } = state.user
    return {
        logIn: {
            isGuest, checking, errorMessage
        },
        registration: {
            newUserIsChecking, newUserErrorMessage, newUserIsChecked
        }
    }
}, {checkUserData, saveNewUser, logOut})(UserMenu)
