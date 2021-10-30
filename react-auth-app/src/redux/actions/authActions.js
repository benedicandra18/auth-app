import { LOGIN, LOGOUT, SET_DATA } from '../types'

export const login = () => dispatch => {
  dispatch(setLogin())
}

export const logout = () => dispatch => {
  dispatch(setLogout())
}

export const setData = data => dispatch => {
  dispatch(setData2(data))
  
}

export const setLogin = () => {
  return {
    type: LOGIN
  }
}

export const setLogout = () => {
  return {
    type: LOGOUT
  }
}

export const setData2 = data => {
  return {
    type: SET_DATA,
    payload: data
  }
}