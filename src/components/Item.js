import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

export default function Item(props) {
    const { item, isGuest } = props
    const imgPath = "http://smktesting.herokuapp.com/static/img"
    return(
        <div>
            <h3>{item.title}</h3>
            <img src = {`${imgPath}${item.id}.png`}></img>
            <p>{item.text}</p>
            <CommentList itemID = {item.id} isGuest = {isGuest}/>
        </div>
    )
}
