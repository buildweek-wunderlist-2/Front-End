export const CREATE_LIST = 'CREATE_LIST'
export const CREATE_LIST_ITEM = 'CREATE_LIST_ITEM'
export const GET_LIST_NAMES = 'GET_LIST_NAMES'
export const UPDATE_LIST_NAMES = 'UPDATE_LIST_NAMES'

export function createList(form) {
    return{
        type: CREATE_LIST,
        payload: form
    }
}
export function createListItem(form) {
    return{
        type: CREATE_LIST_ITEM,
        payload: form
    }
}
export function getListNames(form) {
    return{
        type: GET_LIST_NAMES,
        payload: form
    }
}

export function updateList(form) {
    return{
        type: UPDATE_LIST_NAMES,
        payload: form
    }
}