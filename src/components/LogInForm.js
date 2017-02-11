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
        return (
            <div>
                <form>
                    <input type="text" placeholder="login" value = {this.state.login} onChange = {this.handleChange("login")}/>
                    <input type="password" placeholder="password" value = {this.state.password} onChange = {this.handleChange("password")}/>
                    <button onClick = {this.handleSubmit}>{buttonLabel}</button>
                </form>
                <p>{errorMessage}</p>
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
