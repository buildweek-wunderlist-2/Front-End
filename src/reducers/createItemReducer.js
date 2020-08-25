import { CREATE_LIST_ITEM } from '../actions/actions'

const initialState = {
    name: '',
    list_id: ''
}

function createItemReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_LIST_ITEM:
            console.log('PAYLOAD', action.payload)

            return {
                ...state,
                name: action.payload.name,
                list_id: action.payload.list_id
            }

        default:
            return state
    }

}
export default createItemReducer