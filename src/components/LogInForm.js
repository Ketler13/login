import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

export default class LogInForm extends Component {
    render() {
        return (
            <form>
                <input type="text" />
                <input type="password" />
                <input type="submit" />
            </form>
        )
    }
}
