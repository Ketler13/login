import { LOAD_ITEM_LIST, START, SUCCESS } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrayToMap } from '../helpers'

const ItemModel = Record({
    "id": null,
    "title": null,
    "img": null,
    "text": null
})

const DefaultReducerState = Record({
    "error": null,
    "loading": false,
    "loaded": false,
    "entities": new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action

    switch(type) {
        case LOAD_ITEM_LIST + START:
            return state.set("loading", true)

        case LOAD_ITEM_LIST + SUCCESS:
            return state
                    .mergeIn(["entities"], arrayToMap(response, ItemModel))
                    .set("loaded", true)
                    .set("loading", false)
    }

    return state
}
