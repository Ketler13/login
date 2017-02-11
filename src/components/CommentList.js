import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { loadCommentsByItemId } from '../AC'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

class CommentList extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.isGuest && !nextProps.isGuest) {
            nextProps.loadCommentsByItemId(nextProps.itemID)
        }
    }
    render() {
        if (this.props.isGuest) return <p>Plese enter if you want leve a comment</p>
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }

    getButton() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
               </a>
    }

    getBody() {
        const { itemID, isOpen } = this.props
        if (!isOpen) return null
        const comments = this.props.comments && this.props.comments.get(itemID).map(comment => {
            return (
                <li key = {comment.id}>
                    <Comment
                        rate = {comment.rate}
                        created_at = {comment.created_at}
                        text = {comment.text}
                    />
                </li>
            )
        })
        console.log(comments)
        return (
            <ul>{comments}</ul>
        )
    }
}

export default connect(state => {
    return {
        comments: state.comments.comments
    }
}, {loadCommentsByItemId})(toggleOpen(CommentList))
