import React, { Component, PropTypes } from 'react'
import UserMenu from './UserMenu'
import ItemList from './ItemList'

export default class AppContainer extends Component {
    render() {
        return (
            <div>
                <UserMenu />
                <ItemList />
            </div>
        )
    }
}
