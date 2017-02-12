import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import { loadCommentsByItemId } from '../AC'
import { addNewComment } from '../AC'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isLoaded: PropTypes.bool,
        token: PropTypes.string
    }

    static defaultProps = {
        comments: []
    }

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
        const { itemID, isOpen, isLoading, token, commentIsSending,
                commentIsSent, addNewComment, loadCommentsByItemId } = this.props
        if (!isOpen) return null
        const comments = this.props.comments && this.props.comments.map(comment => {
            return (
                <li key = {comment.id}>
                    <Comment
                        rate = {comment.rate}
                        created_at = {comment.created_at}
                        user = {comment.created_by.username}
                        text = {comment.text}
                    />
                </li>
            )
        })
        const loader = isLoading && <Loader />
        return (
            <div>
                {loader}
                <ul>{comments}</ul>
                <NewCommentForm
                    itemID = {itemID}
                    token = {token}
                    commentIsSending = {commentIsSending}
                    commentIsSent = {commentIsSent}
                    loadCommentsByItemId = {loadCommentsByItemId}
                    addNewComment = {addNewComment}
                />
            </div>
        )
    }
}

export default connect((state, props) => {
    const { items, loadedComments, loadingComments, commentIsSending,
            commentIsSent } = state.comments
    return {
        comments: items.get(props.itemID),
        isLoaded: loadedComments.includes(props.itemID),
        isLoading: loadingComments.includes(props.itemID),
        token: state.user.token,
        commentIsSending, commentIsSent
    }
}, {loadCommentsByItemId, addNewComment})(toggleOpen(CommentList))
