import { LOAD_ITEM_LIST, LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER,
        ADD_NEW_COMMENT, START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { type, response } = action

    switch(type) {
        case LOAD_ITEM_LIST:
            response.length && next({...action, type: type + SUCCESS})
            break

        case LOAD_COMMENTS_BY_ITEM_ID:
            response.length && next({...action, type: type + SUCCESS})
            break

        case CHECK_USER_DATA:
            response.success && next({...action, type: type + SUCCESS})
            !response.succsess && next({...action, type: type + FAIL})
            break

        case SAVE_NEW_USER:
            response.success && next({...action, type: type + SUCCESS})
            !response.success && next({...action, type: type + FAIL})
            break

        case ADD_NEW_COMMENT:
            response.success && next({...action, type: type + SUCCESS})
            !response.success && next({...action, type: type + FAIL})

        default:
            next(action)
    }
}
