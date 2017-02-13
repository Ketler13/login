import React, {Component, PropTypes} from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'

export default class RegistrationForm extends Component {
    static PropTypes = {

    }

    state = {
        login: "",
        password: ""
    }

    render() {
        const { newUserIsChecking, newUserErrorMessage } = this.props
        const buttonLabel = newUserIsChecking ? <FaSpinner /> : "Sign up"
        const errorElement = newUserErrorMessage ? <p>{newUserErrorMessage}</p> : null
        return (
            <div className="registration_form">
                <form>
                    <input className = "header_input" type="text" placeholder="login" value = {this.state.login} onChange = {this.handleChange("login")}/>
                    <input className = "header_input" type="password" placeholder="password" value = {this.state.password} onChange = {this.handleChange("password")}/>
                    <button className = "header_button registration_button" onClick = {this.handleSubmit}>{buttonLabel}</button>
                </form>
                {errorElement}
            </div>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev && ev.preventDefault && ev.preventDefault()
        const { login, password } = this.state
        login && password && this.props.saveNewUser(login, password)
        this.setState({
            login: "",
            password: ""
        })
    }
}
