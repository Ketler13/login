import React, { PropTypes } from 'react'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import ItemList from '../components/ItemList'

function ItemListRoute(props) {
    return (
        <div>
            <ItemList />
            {props.children}
            {props.item}
        </div>
    )
}

export default ItemListRoute
