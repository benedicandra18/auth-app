import { SET_DATA, GET_DATA } from "../types";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
      case GET_DATA:
      return {
        ...state,
        data: [...action.payload]
      };
    default:
      return state;
  }
}