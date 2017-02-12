import React, { PropTypes } from 'react'
import Item from '../components/Item'

function ItemRoute(props) {
    return (
        <Item id = {props.params.id} key = {props.params.id}/>
    )
}

export default ItemRoute
