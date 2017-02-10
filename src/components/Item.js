import React, {Component, PropTypes} from 'react'

export default function Item(props) {
    const { item, isGuest } = props
    const imgPath = "http://smktesting.herokuapp.com/static/img"
    const reviews = isGuest ? 'Вы должны войти, чтобы оставить отзыв' : 'Reviews'
    return(
        <div>
            <h3>{item.title}</h3>
            <img src = {`${imgPath}${item.id}.png`}></img>
            <p>{item.text}</p>
            <p>{reviews}</p>
        </div>
    )
}
