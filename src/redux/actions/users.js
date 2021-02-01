import * as types from './../types/users'

/**
 * Update user search
 * @param {*} searchValue 
 */
export const updateUserSearch = (searchValue) => (dispatch) =>
    dispatch({
        type: types.UPDATE_USER_SEARCH,
        payload: { searchValue }
    })

/**
 * Get users
 * @param {*} users 
 */
export const getUsers = (users) => (dispatch) =>
  dispatch({
    type: types.GET_USERS,
    payload: { users }
  })