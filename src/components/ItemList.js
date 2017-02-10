import React, {Component, PropTypes} from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { loadItemList } from '../AC'
import {mapToArray} from '../helpers'

class ItemList extends Component {
    componentDidMount() {
        this.props.loadItemList()
    }

    render() {
        const { items, isGuest } = this.props
        const elements = items.map(item => {
            return (
                <li key = {item.id}>
                    <Item item = {item} isGuest = {isGuest} />
                </li>
            )
        })
        const itemListStyle = {
            listStyleType: "none"
        }
        return (
            <div>
                <h2>ItemList</h2>
                <ul style = {itemListStyle}>{elements}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        items: mapToArray(state.items.entities),
        isGuest: state.user.isGuest
    }
}, {loadItemList})(ItemList)
