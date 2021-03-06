import { TEST_DISPATCH, SET_CURRENT_USER, FOLLOW_USER } from "../actions/Types";
import isEmpty from "../validation/is-empty";

//creates initial state
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return { ...state, user: action.payload };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    // case FOLLOW_USER:
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
}
