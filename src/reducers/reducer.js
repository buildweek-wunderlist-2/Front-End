import { CREATE_LIST } from '../actions/actions'

const initialState = {
    name: '',
    type: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_LIST:
            return {
                ...state,
                name: action.payload.name,
                type: action.payload.type
            }
        default:
            return state
    }

}
export default reducer