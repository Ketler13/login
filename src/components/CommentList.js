import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { loadCommentsByItemId } from '../AC'
import { addNewComment } from '../AC'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

class CommentList extends Component {
    componentWillReceiveProps(nextProps) {
        if (!this.props.isLoaded && !this.props.isOpen && nextProps.isOpen) {
            nextProps.loadCommentsByItemId(nextProps.itemID)
        }
    }
    render() {
        if (this.props.isGuest) return <p>Plese enter if you want leave a comment</p>
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }

    getButton() {
        return <button onClick = {this.props.toggleOpen}>
                    {this.props.isOpen ? 'hide' : 'show'} comments
               </button>
    }

    getBody() {
        const { itemID, isOpen } = this.props
        if (!isOpen) return null
        const comments = this.props.comments && this.props.comments.map(comment => {
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
        return (
            <div>
                <ul>{comments}</ul>
                <NewCommentForm
                    itemID = {itemID}
                    addNewComment = {this.props.addNewComment}
                    token = {this.props.token}
                />
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        comments: state.comments.comments.get(props.itemID),
        isLoaded: state.comments.loadedComments.includes(props.itemID),
        token: state.user.token
    }
}, {loadCommentsByItemId, addNewComment})(toggleOpen(CommentList))
