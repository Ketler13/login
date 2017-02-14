import React, { PropTypes } from 'react'
import Rater from './Rater'

function Comment(props) {
    const { rate, text, created_at, user } = props
    return (
        <section className = "comment">
            <p><b>{user}</b> said:</p>
            <Rater rate = {rate}/>
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
