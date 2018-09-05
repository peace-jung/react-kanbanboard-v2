import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Classroom from "../containers/Classroom";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";

import Sider from "../components/Sider";
import Search from "../components/Search";
import "../style/App.css";

import { getStatusRequest } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.getStatusRequest().then(() => {
      if (!this.props.status.valid) {
        let currentUser = {
          isLoggedIn: false,
          id: "",
          name: "",
          type: ""
        };
        document.cookie =
          "key=" +
          btoa(unescape(encodeURIComponent(JSON.stringify(currentUser))));
      }
    });
  }

  render() {
    return (
      <div className="wrap">
        <Sider isLoggedIn={this.props.status} />
        <Search />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Classroom} />
            <Route path="/main" component={Classroom} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.auth.login.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStatusRequest: () => {
      return dispatch(getStatusRequest());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
