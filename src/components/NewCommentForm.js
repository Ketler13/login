import React, {Component, PropTypes} from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'

export default class NewCommentForm extends Component {
    static PropTypes = {

    }

    componentWillReceiveProps(nextProps) {
        nextProps.commentIsSent && nextProps.loadCommentsByItemId(nextProps.itemID)
    }

    state = {
        rate: "",
        text: "",
        email: ""
    }

    render() {
        const { commentIsSending, commentIsSent } = this.props
        const buttonLabel = commentIsSending ? <FaSpinner/> : "Send"
        return (
            <form>
                <label htmlFor="rate">Rate this item</label>
                <input type="number" id="rate" min="1" max="5" value = {this.state.rate} required onChange = {this.handleChange("rate")}/>
                <label htmlFor="text">Enter comment</label>
                <input type="text" id="text" value = {this.state.text} required onChange = {this.handleChange("text")}/>
                <label htmlFor="email">Your e-mail</label>
                <input type="email" id="email" value = {this.state.email} required onChange = {this.handleChange("email")}/>
                <button onClick = {this.handleSubmit}>{buttonLabel}</button>
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
