import { LOAD_ITEM_LIST, LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER,
        ADD_NEW_COMMENT, START, SUCCESS } from '../constants'

export default store => next => action => {
    if ((action.type === LOAD_ITEM_LIST) && action.response.length) {
        next({...action, type: action.type + SUCCESS})
    }
    console.log(action)
    next(action)
}
