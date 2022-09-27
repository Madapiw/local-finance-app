import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Authtentication from "./Authtentication";

class ProtectedRoute extends Component {
  render() {
    let auth = { token: Authtentication("token123") };

    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
