import React, { PropTypes } from 'react'
import CommentList from './CommentList'

function Item(props) {
    const { item, isGuest } = props
    const imgPath = "http://smktesting.herokuapp.com/static/img"
    return(
        <section className = "item">
            <h3>Product {item.id}</h3>
            <img src = {`${imgPath}${item.id}.png`}></img>
            <p>{item.text}</p>
            <CommentList itemID = {item.id} isGuest = {isGuest}/>
        </section>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    isGuest: PropTypes.bool
}

export default Item
