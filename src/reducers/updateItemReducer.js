import { UPDATE_LIST } from '../actions/actions'

const initialState = {
    name: '',
    list_id: ''
}

function updateItemReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIST:
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
export default updateItemReducer