import { LOGIN, LOGOUT, SET_DATA, GET_DATA } from '../types'
import axios from 'axios'

export const login = () => dispatch => {
  dispatch(setLogin())
}

export const logout = () => dispatch => {
  dispatch(setLogout())
}

export const setData = data => dispatch => {
  ////VARIANTA CU LOCAL STORAGE
  //dispatch(setData2(data))

  axios.post("/data", data)
  .then(res=>dispatch({
    type: SET_DATA,
    payload: res.data
  }))
  
}

export const getData = () => dispatch => {
  
  axios.get("/data")
  .then(res=>dispatch({
    type: GET_DATA,
    payload: res.data
  }))
  
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