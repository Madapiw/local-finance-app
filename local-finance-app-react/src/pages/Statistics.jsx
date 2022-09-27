import React, { Component } from "react";
import NavBarProtected from "../components/NavBarProtected";

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <NavBarProtected />
        <div className="container">
          <h1 className="display-2">Statistics</h1>
        </div>
      </div>
    );
  }
}
