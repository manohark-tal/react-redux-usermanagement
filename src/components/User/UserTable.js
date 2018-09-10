import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  deleteUser,
  editUserRequest
} from "../../actions/userManagement.actions";
import User from "./User";

const UserTable = props => {
  let editColumn = props.isAdmin ? <th>actions</th> : null;
  let users = props.users.map((user, index) => {
    return (
      <User
        key={user.email}
        index={index + 1}
        user={user}
        isAdmin={props.isAdmin}
        editUserRequest={props.editUserRequest}
        deleteUser={props.deleteUser}
      />
    );
  });
  return (
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>role</th>
          {editColumn}
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  );
};
const mapStateToProps = state => {
  return {
    users: state.userControl.users,
    isAdmin: state.auth.isAdmin,
    loggedIn: state.auth.loggedIn,
    loggedUser: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteUser,
      editUserRequest,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
