import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LogInForm from './LogInForm'
import RegistrationForm from './RegistrationForm'
import { checkUserData, saveNewUser } from '../AC'

function UserMenu(props) {
    const { isGuest } = props
    const logInForm = isGuest && <LogInForm checkUserData = {props.checkUserData}/>
    const registrationForm = isGuest && <RegistrationForm saveNewUser = {props.saveNewUser}/>

    return (
        <div>
            {logInForm}
            {registrationForm}
        </div>
    )
}

export default connect(state => {
    return {
        isGuest: state.user.isGuest
    }
}, {checkUserData, saveNewUser})(UserMenu)
