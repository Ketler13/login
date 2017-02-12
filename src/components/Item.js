import React, { PropTypes } from 'react'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import {mapToArray} from '../helpers'

function Item(props) {
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

Item.propTypes = {
    item: PropTypes.object.isRequired,
    isGuest: PropTypes.bool
}

export default connect((state, props) => {
    const id = Number(props.id)
    return {
        item: state.items.entities.get(id),
        isGuest: state.user.isGuest
    }
})(Item)
