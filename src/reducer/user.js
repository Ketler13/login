import { LOAD_ITEM_LIST, CHECK_USER_DATA, SAVE_NEW_USER } from '../constants'
import { Record } from 'immutable'

const DefaultReducerState = Record({
    "isGuest": true,
    "token": null
})

export default (state = new DefaultReducerState, action) => {
    const { type, payload, response } = action

    switch(type) {
        case CHECK_USER_DATA:
            return state
                    .set("isGuest", !response.success)
                    .set("token", response.token)
    }

    return state
}
