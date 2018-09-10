import * as actions from "./types";
import { push } from "connected-react-router";
import UserSerive from "../services/user.service";

const sendingRequest = actionType => ({
  type: actionType
});

const loginFailed = error => ({
  type: actions.LOGIN_FAILURE,
  error
});

const loginSuccessful = user => {
  console.log(user);
  return {
    type: actions.LOGIN_SUCCESS,
    user
  };
};
const fetchUsers = users => {
  return {
    type: actions.FETCH_USERS,
    users
  }
};
const logout = () => {
  return {
    type: actions.LOGOUT
  };
};
export const loginUser = (username, password) => dispatch => {
  dispatch(sendingRequest(actions.LOGIN));

  let user = UserSerive.getUser(username, password);
  if (user === null) {
    dispatch(loginFailed("Wrong Credentials"));
  } else {
    dispatch(loginSuccessful(user));
    dispatch(fetchUsers(UserSerive.getAllUsers()));
  }
};
export const logoutUser = () => dispatch => {
  dispatch(logout());
  dispatch(push("/"))
};
