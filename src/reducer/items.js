import { LOAD_ITEM_LIST, GUEST, USER } from '../constants'
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
    "loading": null,
    "loaded": null,
    "entities": new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action

    switch(type) {
        case LOAD_ITEM_LIST:
            return state.mergeIn(["entities"], arrayToMap(response, ItemModel))
    }

    return state
}
