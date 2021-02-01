import * as types from './../types/repos'

const initialState = {
    all: [],
    searchValue: ""
}

/**
 * Repo reducer
 * @param {*} state 
 * @param {*} param1 
 */
const repoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.UPDATE_REPO_SEARCH:
            return {
                ...state,
                searchValue: payload.searchValue
            }
        case types.GET_REPOS:
            return {
                ...state,
                all: payload.repos
            }
        default:
            return state
    }
}

export default repoReducer