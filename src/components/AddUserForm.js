import React, { Component } from "react";
import { addUser, editUser,cancelEditRequest } from "../actions/userManagement.actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    if (props.editRequest) {
      this.state = {
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        mobile: props.user.mobile,
        email: props.user.email,
        password: props.user.password,
        role: props.user.role
      };
    } else {
      this.state = {
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        role: ""
      };
    }
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobile: this.state.mobile,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };
    if (this.props.editRequest) {
      this.props.editUser(this.props.user, newUser);
    } else {
      this.props.addUser(newUser);
    }
  };
  cancelEdit=(e)=>{
      e.preventDefault();
      this.props.cancelEditRequest()
  }
  render() {
    let editOrAdd = this.props.editRequest ? "Edit" : "Add";
    let cancelButton =this.props.editRequest? (
      <div className="field">
        <button
          className="button is-danger is-centered"
          onClick={this.cancelEdit}
        >
          cancel
        </button>
      </div>
    ):null;
    return (
      <form className="form-horizontal login-form">
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="first name"
              name="firstName"
              onChange={this.onChangeHandler}
              value={this.state.firstName}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="last name"
              name="lastName"
              onChange={this.onChangeHandler}
              value={this.state.lastName}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.onChangeHandler}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Mobile</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={this.onChangeHandler}
              name="password"
              value={this.state.password}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Role</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="role"
              name="role"
              onChange={this.onChangeHandler}
              value={this.state.role}
            />
          </div>
        </div>
        <div className="field">
          <button
            className="button is-primary is-centered"
            type="submit"
            onClick={this.formSubmit}
          >
            {editOrAdd}
          </button>
        </div>
        {cancelButton}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    editRequest: state.userControl.edit,
    user: state.userControl.user
    
  };
};
const maoDispatchToProps = dispatch => {
  return bindActionCreators({ addUser, editUser,cancelEditRequest }, dispatch);
};
export default connect(
  mapStateToProps,
  maoDispatchToProps
)(AddUserForm);
