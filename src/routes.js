import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import ItemList from './RouteHandlers/ItemListRoute'
import Item from './RouteHandlers/ItemRoute'
import ItemIndexPage from './RouteHandlers/ItemIndexPage'
import ErrorPage from './RouteHandlers/ErrorPage'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history = {history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/products" />
            <Route path="/products" component={ItemList}>
                <IndexRoute component = {ItemIndexPage}/>
                <Route path=":id" components={{item: Item}} />
            </Route>
            <Route path="error" component={ErrorPage}/>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
)
