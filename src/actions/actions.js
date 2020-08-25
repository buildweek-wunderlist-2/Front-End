export const CREATE_LIST = 'CREATE_LIST'

export function createList(form) {
    return{
        type: CREATE_LIST,
        payload: form
    }
}