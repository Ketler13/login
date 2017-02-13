import React, { PropTypes } from 'react'

function Comment(props) {
    const { rate, text, created_at, user } = props
    return (
        <section className = "comment">
            <p>{rate}</p>
            <p><b>{user}</b> said:</p>
            <p>{text}</p>
            <p>{created_at}</p>
        </section>
    )
}

Comment.propTypes = {
    rate: PropTypes.number,
    text: PropTypes.string,
    created_at: PropTypes.string
}

export default Comment
