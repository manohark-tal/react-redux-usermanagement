import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth.actions";
import LoginForm from "./LoginForm";
import UserTable from "./User/UserTable";

const HomePage = props => {
 // console.log(props);
  let content = props.loggedIn ? (
    <div>
      <UserTable />
    </div>
  ) : (
    <LoginForm submitAction={props.loginUser} />
  );
  return content;
};
const mapStateToProps = state => {
  return state.auth;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
