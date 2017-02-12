import { LOAD_ITEM_LIST,LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER,
        ADD_NEW_COMMENT, LOG_OUT } from '../constants'

export function loadItemList() {
    return {
        type: LOAD_ITEM_LIST,
        callAPI : '/api/products/'
    }
}

export function loadCommentsByItemId(id) {
    return {
        type: LOAD_COMMENTS_BY_ITEM_ID,
        payload: {id},
        callAPI: `/api/reviews/${id}`
    }
}

export function addNewComment(config) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            ...config
        },
        callAPI: `/api/reviews/${config.product}`
    }
}

export function checkUserData(login, password) {
    return {
        type: CHECK_USER_DATA,
        payload: {
            login, password
        },
        callAPI: '/api/login/'
    }
}

export function saveNewUser(login, password) {
    return {
        type: SAVE_NEW_USER,
        payload: {
            login, password
        },
        callAPI: '/api/register/'
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}
