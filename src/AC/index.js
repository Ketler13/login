import { LOAD_ITEM_LIST, CHECK_USER_DATA, SAVE_NEW_USER } from '../constants'

export function loadItemList() {
    return {
        type: LOAD_ITEM_LIST,
        callAPI : '/api/products/'
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
