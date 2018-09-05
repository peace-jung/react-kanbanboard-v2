import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Search.css";

class Search extends Component {

  render() {
    return (
      <div className="search">
        <Link to="/login" className="btn login_btn">검색바</Link>
      </div>
    );
  }
}

export default Search;
