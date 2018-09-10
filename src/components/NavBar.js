import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth.actions";
import { bindActionCreators } from "redux";
const NavBar = props => {
  let user = props.loggedIn ? (
    <div className="navbar-end">
      <div className="navbar-item">
        {props.loggedUser.firstName + " " + props.loggedUser.lastName}
      </div>
    </div>
  ) : (
    ""
  );
  let add = props.isAdmin ? (
    <Link className="navbar-item" to="/add">
      Add User
    </Link>
  ) : (
    ""
  );
  let logout = props.loggedIn ? (
    <a
      className="navbar-item"
      onClick={e => {
        e.preventDefault();
        props.logoutUser();
      }}
    >
      Logout
    </a>
  ) : null;
  return (
    <nav className="navbar is-fixed-top is-black">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          {add}
          {logout}
        </div>
        {user}
      </div>
    </nav>
  );
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
};
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    loggedUser: state.auth.user,
    isAdmin: state.auth.isAdmin
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
