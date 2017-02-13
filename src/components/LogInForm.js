import React, {Component, PropTypes} from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'
import { connect } from 'react-redux'

export default class LogInForm extends Component {
    static PropTypes = {

    }

    state = {
        login: "",
        password: ""
    }

    render() {
        const { checking, errorMessage } = this.props
        const buttonLabel = checking ? <FaSpinner /> : "Log in"
        const errorElement = errorMessage ? <p>{errorMessage}</p> : null
        return (
            <div className="login_form">
                <form>
                    <input className = "header_input" type="text" placeholder="login" value = {this.state.login} onChange = {this.handleChange("login")}/>
                    <input className = "header_input" type="password" placeholder="password" value = {this.state.password} onChange = {this.handleChange("password")}/>
                    <button className = "header_button login_button" onClick = {this.handleSubmit}>{buttonLabel}</button>
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
        login && password && this.props.checkUserData(login, password)
        this.setState({
            login: "",
            password: ""
        })
    }
}
