import { CHECK_USER_DATA, SAVE_NEW_USER, START, SUCCESS, FAIL } from '../constants'
import { Record } from 'immutable'

const DefaultReducerState = Record({
    "isGuest": true,
    "token": null,
    "checking": false,
    "checked": false,
    "errorMessage": null,
    "newUserIsChecking": false,
    "newUserIsChecked": false,
    "newUserErrorMessage": null
})

export default (state = new DefaultReducerState, action) => {
    const { type, payload, response } = action

    switch(type) {
        case CHECK_USER_DATA + START:
            return state
                    .set("checking", true)
                    .set("checked", false)
                    .set("errorMessage", null)

        case CHECK_USER_DATA + SUCCESS:
            return state
                    .set("isGuest", !response.success)
                    .set("token", response.token)
                    .set("checked", true)
                    .set("checking", false)

        case CHECK_USER_DATA + FAIL:
            return state
                    .set("checked", false)
                    .set("checking", false)
                    .set("errorMessage", response.message)

        case SAVE_NEW_USER + START:
            return state
                    .set("newUserIsChecking", true)
                    .set("newUserIsChecked", false)
                    .set("newUserErrorMessage", null)

        case SAVE_NEW_USER + SUCCESS:
            return state
                    .set("newUserIsChecked", true)
                    .set("newUserIsChecking", false)
                    .set("newUserErrorMessage", null)

        case SAVE_NEW_USER + FAIL:
            return state
                    .set("newUserIsChecked", false)
                    .set("newUserIsChecking", false)
                    .set("errorMessage", response.message)
    }

    return state
}
