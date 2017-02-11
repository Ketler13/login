import React, {Component, PropTypes} from 'react'

export default class NewCommentForm extends Component {
    state = {
        rate: "",
        text: "",
        email: ""
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="number" value = {this.state.rate} required onChange = {this.handleChange("rate")}/>
                <input type="text" value = {this.state.text} required onChange = {this.handleChange("text")}/>
                <input type="email" value = {this.state.email} required onChange = {this.handleChange("email")}/>
                <input type="submit" value="Add comment"/>
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
        const { rate, text, email } = this.state
        const { itemID, addNewComment, token } = this.props
        const created_at = new Date().toISOString()
        const config = {
            rate, text, email, created_at, token,
            product: itemID
        }
        addNewComment(config)
        this.setState({
            rate: "",
            text: "",
            email: ""
        })

    }
}
