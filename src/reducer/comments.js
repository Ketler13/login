import { LOAD_COMMENTS_BY_ITEM_ID } from '../constants'
import { Record, OrderedMap, List } from 'immutable'
import { arrayToMap } from '../helpers'

const DefaultReducerState = Record({
    "loadingComments": [],
    "loadedComments": [],
    "comments": new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action

    switch(type) {
        case LOAD_COMMENTS_BY_ITEM_ID:
            return state.setIn(["comments", payload.id], response)

    }
    return state
}
