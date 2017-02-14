import React, {Component, PropTypes} from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'
import Rater from './Rater'

export default class NewCommentForm extends Component {
    static PropTypes = {

    }

    componentWillReceiveProps(nextProps) {
        nextProps.commentIsSent && nextProps.loadCommentsByItemId(nextProps.itemID)
    }

    state = {
        rate: 0,
        text: "",
        email: ""
    }

    render() {
        const { commentIsSending, commentIsSent } = this.props
        const buttonLabel = commentIsSending ? <FaSpinner/> : "Send"
        return (
            <section>
                <p>Rate our product:</p>
                <Rater rate = {this.state.rate} handleRate = {this.handleRate}/>
                <form>
                    <p><label htmlFor="text">Enter comment:</label></p>
                    <p><input className = "comment_input" type="text" id="text" value = {this.state.text} required onChange = {this.handleChange("text")}/></p>
                    <p><label htmlFor="email">Your e-mail:</label></p>
                    <p><input className = "comment_input" type="email" id="email" value = {this.state.email} required onChange = {this.handleChange("email")}/></p>
                    <p><button className = "comment_button" onClick = {this.handleSubmit}>{buttonLabel}</button></p>
                </form>
            </section>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleRate = rate => ev => {
        this.setState({
            rate: rate
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
        rate && addNewComment(config)
        this.setState({
            rate: 0,
            text: "",
            email: ""
        })

    }
}
