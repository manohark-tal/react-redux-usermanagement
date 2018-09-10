import * as actions from "../actions/types";

const userControl = {
  edit: false,
  delete: false,
  add: false,
  user: {},
  users: [],
  newUser: {},
  message: ""
};
export default function(state = userControl, action) {
  switch (action.type) {
    case actions.EDIT_USER:
      return {
        ...state,
        edit: true,
        user: action.user
      };
    case actions.CANCEL_EDIT:
      return {
        ...state,
        user: null,
        edit: false
      };
    case actions.EDIT_SUCCESS:
      return {
        ...state,
        edit: false,
        user: {...action.user},
        newUser: {...action.newUser},
        message: action.message
      };

    case actions.EDIT_FAILURE:
      return {
        ...state,
        edit: false,
        user: action.user,
        newUser: action.newUser,
        message: action.message
      };
    case actions.DELETE_USER:
      return { ...state, delete: true, user: action.user };

    case actions.DELETE_SUCCESS:
      return {
        ...state,
        delete: false,
        user: action.user,
        message: action.message
      };

    case actions.DELETE_FAILURE:
      return {
        ...state,
        delete: false,
        user: action.user,
        message: action.message
      };
    case actions.ADD_USER:
      return { ...state, add: true, user: action.user };

    case actions.ADD_SUCCESS:
      return {
        ...state,
        add: false,
        user: action.user,
        message: action.message
      };

    case actions.ADD_FAILURE:
      return {
        ...state,
        add: false,
        user: action.user,
        message: action.message
      };
    case actions.FETCH_USERS: {
      return {
        ...state,
        users: [...action.users]
      };
    }
    case actions.LOGOUT:
      return userControl;
    default:
      return state;
  }
}
