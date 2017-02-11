import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import api from '../middlewares/api'
import responseHandler from '../middlewares/responseHandler'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(api, responseHandler))

const store = createStore(reducer, {}, enhancer)

export default store
