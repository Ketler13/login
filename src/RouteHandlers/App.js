import React, { Component, PropTypes } from 'react'
import UserMenu from '../components/UserMenu'
import ItemList from './ItemListRoute'
import store from '../store'
import { Provider } from 'react-redux'

export default function App(props) {
    return (
        <Provider store = {store}>
            <div>
                <UserMenu />
                {props.children}
            </div>
        </Provider>
    )
}
