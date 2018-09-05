import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../style/Login.css";

import { loginRequest } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    let id = this.state.id;
    let password = this.state.password;

    this.props.loginRequest(id, password).then(() => {
      if (this.props.status === "SUCCESS") {
        let currentUser = {
          isLoggedIn: true,
          id: id,
          name: this.props.currentUser.name,
          type: this.props.currentUser.type
        };
        document.cookie = "key=" + btoa(unescape(encodeURIComponent(JSON.stringify(currentUser))));
        console.log("로그인 되었습니다.");
        this.props.history.push("/main");
      }
    });
  }

  handleChange = e => {
    let nextState = {};
    nextState[e.target.id] = e.target.value;
    this.setState(nextState);
  };

  render() {
    return (
      <div className="login_page">
        {/* <div className="left page_title">
          <p>KanbanBoard System</p>
          <p>for Project Management</p>
          <p>and Team Collaboration</p>
          <p>with ReactJS</p>
          <p className="title_ko">웹기반 칸반보드 시스템</p>
        </div> */}
        <div className="login_form">
          <p>Member Login</p>
          <input
            type="text"
            className="input_id"
            id="id"
            value={this.state.id}
            onChange={this.handleChange}
            placeholder="ID"
          />
          <input
            type="password"
            className="input_pw"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="PASSWORD"
          />
          <button
            type="submit"
            className="login_btn"
            onClick={this.handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.auth.login.status,
    currentUser: state.auth.status.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (id, password) => {
      return dispatch(loginRequest(id, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
