import { CREATE_LIST, GET_LIST_NAMES } from '../actions/actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    name: '',
    type: '1'
}

function listReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_LIST:
            //redirect to ToDoList
            return {
                ...state,
                name: action.payload.name,
                type: action.payload.type
            }
        case GET_LIST_NAMES:
            
            axiosWithAuth()
                .get('/api/lists')
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
               
            return state

        default:
            return state
    }
}
export default listReducer