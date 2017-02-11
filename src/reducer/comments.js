import { LOAD_COMMENTS_BY_ITEM_ID, START, SUCCESS } from '../constants'
import { Record, OrderedMap, List } from 'immutable'
import { arrayToMap } from '../helpers'

const DefaultReducerState = Record({
    "loadingComments": [],
    "loadedComments": [],
    "items": new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action

    switch(type) {
        case LOAD_COMMENTS_BY_ITEM_ID + START:
            return state.update("loadingComments", (loadingComments) => loadingComments.concat(payload.id))

        case LOAD_COMMENTS_BY_ITEM_ID + SUCCESS:
            return state
                    .setIn(["items", payload.id], response)
                    .update("loadedComments", (loadedComments) => loadedComments.concat(payload.id))
                    .update("loadingComments", (loadingComments) => loadingComments.filter(comment => {
                        return comment !== payload.id
                    }))

    }
    return state
}
