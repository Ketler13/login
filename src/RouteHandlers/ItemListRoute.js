import React, { PropTypes } from 'react'
import ItemList from '../components/ItemList'

function ItemListRoute(props) {
    return (
        <div>
            <ItemList />
            {props.children}
            <main   className = "item_list">
                {props.item}
            </main>
        </div>
    )
}

export default ItemListRoute
