import { SET_DATA, GET_DATA, SORT_DATA } from "../types";

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
      case SORT_DATA:
        return {
            ...state,
            data: state.data.slice().sort(function(a, b) {
            if(a.email> b.email) 
                return 1 
            if(a.email< b.email) 
                return -1
            return 0
            
        })
    }
    default:
      return state;
  }
}