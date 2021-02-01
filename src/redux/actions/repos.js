import * as types from './../types/repos'

/**
 * Update repo search
 * @param {*} searchValue 
 */
export const updateRepoSearch = (searchValue) => (dispatch) =>
    dispatch({
        type: types.UPDATE_REPO_SEARCH,
        payload: { searchValue }
    })

/**
 * Get repos
 * @param {*} repos 
 */
export const getRepos = (repos) => (dispatch) =>
  dispatch({
    type: types.GET_REPOS,
    payload: { repos }
  })