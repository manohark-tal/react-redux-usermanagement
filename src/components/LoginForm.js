import React, { Component } from "react";
import { loginUser } from "../actions/auth.actions";

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
      <form>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.onChangeHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={this.onChangeHandler}
              name="password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              className="button is-success"
              type="submit"
              onClick={this.formSubmit}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default LoginForm;
