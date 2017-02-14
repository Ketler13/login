import React, {Component, PropTypes} from 'react'
import Item from './Item'
import Loader from './Loader'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { loadItemList } from '../AC'
import {mapToArray} from '../helpers'

class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        isGuest: PropTypes.bool
    }

    static defaultProps = {
        items: []
    }

    componentDidMount() {
        this.props.loadItemList()
    }

    render() {
        const { items, isGuest } = this.props
        const menu = items.map(item => {
            return (
                <li key = {item.id}>
                    <Link   className = "item_list_link_item" to={`/products/${item.id}`}>Product {item.id}</Link>
                </li>
            )
        })

        const itemListStyle = {
            listStyleType: "none"
        }
        return (
            <nav>
                <h1>Look at our product list</h1>
                <ul className = "item_list_link_list">{menu}</ul>
            </nav>
        )
    }
}

export default connect((state) => {
    return {
        items: mapToArray(state.items.entities),
        isGuest: state.user.isGuest
    }
}, {loadItemList})(ItemList)
