import React, {Component, PropTypes} from 'react'

export default class RegistrationForm extends Component {
    state = {
        login: "",
        password: ""
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="text" value = {this.state.login} onChange = {this.handleChange("login")}/>
                <input type="password" value = {this.state.password} onChange = {this.handleChange("password")}/>
                <input type="submit" value="Enter"/>
            </form>
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
