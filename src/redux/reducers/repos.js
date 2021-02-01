import * as types from './../types/repos'

const initialState = {
    all: [],
    searchValue: ""
}

/**
 * User reducer
 * @param {*} state 
 * @param {*} param1 
 */
const repoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.UPDATE_REPO_SEARCH:
            return {
                searchValue: payload.searchValue
            }
        default:
            return state
    }
}

export default repoReducer