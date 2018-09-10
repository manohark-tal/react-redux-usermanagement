import * as actions from "./types";
import { push } from "connected-react-router";
import UserSerive from "../services/user.service";

const editUserAction = user => {
  return {
    type: actions.EDIT_USER,
    user
  };
};
const editUserFailure = (user, newUser, message) => {
  return {
    type: actions.EDIT_FAILURE,
    message,
    user,
    newUser
  };
};
const editUserSuccessfull = (user, newUser, message) => {
  return {
    type: actions.EDIT_SUCCESS,
    message,
    user,
    newUser
  };
};

const deleteUserAction = user => {
  return {
    type: actions.DELETE_USER,
    user
  };
};
const deleteUserFailure = (user, message) => {
  return {
    type: actions.DELETE_FAILURE,
    message,
    user
  };
};
const deleteUserSuccessfull = (user, message) => {
  return {
    type: actions.DELETE_SUCCESS,
    message,
    user
  };
};
const addUserAction = user => {
  return {
    type: actions.ADD_USER,
    user
  };
};
const fetchUsers=(users)=>{
    return {
        type:actions.FETCH_USERS,
        users
    }
  }
const addUserSuccessfull = (user, message) => {
  return {
    type: actions.ADD_SUCCESS,
    user,
    message
  };
};
const addUserFailure = (user, message) => {
  return {
    type: actions.ADD_FAILURE,
    user,
    message
  };
};
const cancelEdit=()=>{
    return{
        type:actions.CANCEL_EDIT
    }
}
export const editUser = (user, newUser) => dispatch => {
  let result = UserSerive.editUser(user, newUser);
  if (result == null) {
    dispatch(editUserFailure(user, newUser, "error"));
  } else {
    dispatch(editUserSuccessfull(user, newUser, "success"));
    dispatch(fetchUsers(UserSerive.getAllUsers()));
    dispatch(push("/"))
  }
};
export const cancelEditRequest=()=>dispatch=>{
    dispatch(cancelEdit())
    dispatch(push('/'))
}
export const editUserRequest = user => dispatch => {
  dispatch(editUserAction(user));
  dispatch(push('/edit'))
};

export const deleteUser = user => dispatch => {
  dispatch(deleteUserAction(user));
  let result = UserSerive.removeUser(user.email);
  if (result == null) {
    dispatch(deleteUserFailure(user, "error"));
  } else {
    dispatch(deleteUserSuccessfull(user, "success"));
    dispatch(fetchUsers(UserSerive.getAllUsers()))
  }
};
export const addUser = user => dispatch => {
  dispatch(addUserAction(user));
  let result = UserSerive.addUser(user);
  if (result == null) {
    dispatch(addUserFailure(user, "error"));
  } else {
    dispatch(addUserSuccessfull(user, "success"));
    dispatch(fetchUsers(UserSerive.getAllUsers()))
    dispatch(push("/"))
  }
};
