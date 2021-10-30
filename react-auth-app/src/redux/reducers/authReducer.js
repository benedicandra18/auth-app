import { LOGIN, LOGOUT, SET_DATA } from "../types";

const initialState = {
  is_logged_in: false,
  data: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        is_logged_in: true
      };
      case LOGOUT:
      return {
        ...state,
        is_logged_in: false
      };
      case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}