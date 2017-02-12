import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import ItemList from './RouteHandlers/ItemListRoute'
import Item from './RouteHandlers/ItemRoute'

export default (
    <Router history = {history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/products" />
            <Route path="/products" component={ItemList}>
                <Route path=":id" components={{item: Item}} />
            </Route>
        </Route>
    </Router>
)
