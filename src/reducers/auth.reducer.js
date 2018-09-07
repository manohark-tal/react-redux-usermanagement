import * as actions from "../actions/types";

const auth = {
  sendingRequest: false,
  loggedIn: false,
  user: {},
  isAdmin: false
};

export default function(state = auth, action) {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, sendingRequest: true };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        isAdmin: action.user.role === "admin"
      };

    case actions.LOGIN_FAILURE:
      return state;

    default:
      return state;
  }
}
