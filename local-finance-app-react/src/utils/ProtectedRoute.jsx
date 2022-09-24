import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";



class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    return (
      <Route
        {...props}
        render={(props) =>
          this.state.authenticated ? (
            <Component {...props} />
          ) : (
            <Navigate to="/" replace={true}/>
          )
        }
      />
    );
  }
}



export default (ProtectedRoute);
