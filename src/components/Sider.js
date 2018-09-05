import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Sider.css";

class Sider extends Component {
  render() {
    return (
      <div className="srcoll_bind">
        <div className="sider">
          <Link to="/login" className="btn login_btn">
            로그인
          </Link>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    );
  }
}

Sider.defaultProps = {
  isLoggedIn: false
};

export default Sider;
