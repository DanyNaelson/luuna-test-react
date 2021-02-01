import * as types from './../types/users'

const initialState = {
    all: [],
    searchValue: ""
}

/**
 * User reducer
 * @param {*} state 
 * @param {*} param1 
 */
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.UPDATE_USER_SEARCH:
            return {
                ...state,
                searchValue: payload.searchValue
            }
        case types.GET_USERS:
            return {
                ...state,
                all: payload.users
            }
        default:
            return state
    }
}

export default userReducer