import { LOGIN, LOGOUT } from "../types";

const initialState = {
  is_logged_in: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        is_logged_in: action.payload
      };
      case LOGOUT:
      return {
        ...state,
        is_logged_in: false
      };
    default:
      return state;
  }
}