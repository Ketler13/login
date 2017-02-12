import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import store from './store'
import { Provider } from 'react-redux'
import routes from './routes'


// ReactDOM.render(<Provider store = {store}>
//                     <AppContainer />
//                 </Provider>, document.getElementById('container'))

ReactDOM.render(routes, document.getElementById('container'))
