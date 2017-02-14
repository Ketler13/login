import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import Loader from './Loader'
import { loadItemList } from '../AC'
import { connect } from 'react-redux'
import {mapToArray} from '../helpers'

function Item(props) {
    const { item, isGuest, loaded } = props
    if (!loaded) return <Loader />
    if (!item) return <div><p>Sorry, we do not have this page</p></div>
    const imgPath = "http://smktesting.herokuapp.com/static/img"
    return(
        <div>
            <h3>Product {item.id}</h3>
            <img src = {`${imgPath}${item.id}.png`}></img>
            <p>{item.text}</p>
            <CommentList itemID = {item.id} isGuest = {isGuest}/>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    isGuest: PropTypes.bool
}

export default connect((state, props) => {
    const id = Number(props.id)
    return {
        item: state.items.entities.get(id),
        loaded: state.items.loaded,
        isGuest: state.user.isGuest
    }
}, {loadItemList})(Item)
