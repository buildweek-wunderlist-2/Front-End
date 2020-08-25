import { combineReducers } from 'redux'
import createItemReducer from './createItemReducer'
import listReducer from './listReducer'

export default combineReducers({
    list: listReducer,
    item: createItemReducer
})
