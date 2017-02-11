import React, {Component, PropTypes} from 'react'
import Item from './Item'
import Loader from './Loader'
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
        const { items, isGuest, loading } = this.props
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
        const loader = loading && <Loader />
        return (
            <div>
                <h2>ItemList</h2>
                {loader}
                <ul style = {itemListStyle}>{elements}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        items: mapToArray(state.items.entities),
        isGuest: state.user.isGuest,
        loading: state.items.loading
    }
}, {loadItemList})(ItemList)
