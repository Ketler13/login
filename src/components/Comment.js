import React, { PropTypes } from 'react'

function Comment(props) {
    const { rate, text, created_at, user } = props
    return (
        <div>
            <p>Posted by {user} at {created_at}</p>
            <p>{text}</p>
            <p>{rate}</p>
        </div>
    )
}

Comment.propTypes = {
    rate: PropTypes.number,
    text: PropTypes.string,
    created_at: PropTypes.string
}

export default Comment
