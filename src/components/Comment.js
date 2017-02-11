import React, { PropTypes } from 'react'
export default function Comment(props) {
    const { rate, text, created_at } = props
    return (
        <div>
            <p>Posted by user at {created_at}</p>
            <p>{text}</p>
            <p>{rate}</p>
        </div>
    )
}
