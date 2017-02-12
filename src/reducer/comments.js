import { LOAD_COMMENTS_BY_ITEM_ID, ADD_NEW_COMMENT, START, SUCCESS, FAIL } from '../constants'
import { Record, OrderedMap, List } from 'immutable'
import { arrayToMap } from '../helpers'

const DefaultReducerState = Record({
    "loadingComments": [],
    "loadedComments": [],
    "commentIsSending": false,
    "commentIsSent": false,
    "items": new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action

    switch(type) {
        case LOAD_COMMENTS_BY_ITEM_ID + START:
            return state
                    .update("loadingComments", (loadingComments) => loadingComments.concat(payload.id))
                    .set("commentIsSent", false)

        case LOAD_COMMENTS_BY_ITEM_ID + SUCCESS:
            return state
                    .setIn(["items", payload.id], response)
                    .update("loadedComments", (loadedComments) => loadedComments.concat(payload.id))
                    .update("loadingComments", (loadingComments) => loadingComments.filter(comment => {
                        return comment !== payload.id
                    }))

        case ADD_NEW_COMMENT + START:
            return state
                    .set("commentIsSent", false)
                    .set("commentIsSending", true)

        case ADD_NEW_COMMENT + SUCCESS:
            return state
                    .set("commentIsSent", true)
                    .set("commentIsSending", false)

        case ADD_NEW_COMMENT + FAIL:
            return state
                    .set("commentIsSent", false)
                    .set("commentIsSending", false)

    }
    return state
}
