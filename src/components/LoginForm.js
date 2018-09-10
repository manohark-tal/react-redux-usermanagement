import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.submitAction(this.state.email, this.state.password);
  };
  render() {
    return (
      <form className="form-horizontal login-form">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
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
            />
          </div>
        </div>

        <div className="field">
          <button
            className="button is-success"
            type="submit"
            onClick={this.formSubmit}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
