import React, { Component } from "react";
import NavBarPublic from "../components/NavBarPublic";


export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBarPublic />
        <div className="container">
          <h1 className="display-2">Home</h1>
        </div>
      </div>
    );
  }
}
