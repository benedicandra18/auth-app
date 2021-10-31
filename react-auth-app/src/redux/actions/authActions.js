import { LOGIN, LOGOUT, SET_DATA, GET_DATA, SORT_DATA } from '../types'
import axios from 'axios'
import jwt_decode from "jwt-decode"

export const login = () => dispatch => {
  //dispatch(setLogin())

  //JWT
  axios.post("/login")
  .then(res=>{
    const { token } = res.data
    localStorage.setItem("is_logged_in", token)
    setAuthToken(token)
    const decoded = jwt_decode(token)
    dispatch(setLogin(decoded))
  }
  )
}

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

export const logout = () => dispatch => {
  dispatch(setLogout())
}

export const setData = data => async dispatch => {
  ////VARIANTA CU LOCAL STORAGE
  //dispatch(setData2(data))

  await axios.post("/data", data)
  .then(res=>dispatch({
    type: SET_DATA,
    payload: res.data
  }))
}

export const getData = () => async dispatch => {
  await axios.get("/data")
  .then(res=>dispatch({
    type: GET_DATA,
    payload: res.data
  }))
}

export const sortData = data => async dispatch => {
  dispatch(sortData2(data))
}

export const setLogin = (decoded) => {
  return {
    type: LOGIN,
    payload: decoded
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

export const sortData2 = data => {
  return {
    type: SORT_DATA,
    payload: data
  }
}