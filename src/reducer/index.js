import { combineReducers } from 'redux'
import items from './items'
import user from './user'
import comments from './comments'

export default combineReducers({
    items, comments, user
})
