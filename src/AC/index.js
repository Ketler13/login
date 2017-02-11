import { LOAD_ITEM_LIST,LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER } from '../constants'

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
