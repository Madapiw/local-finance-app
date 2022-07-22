import React, { Switch, Component } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";


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
            <Redirect to="/" />
          )
        }
      />
    );
  }
}

class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} />
          {/* Protected Routes */}
          <ProtectedRoute path="/dashboard" element={<Dashboard />} />
          <ProtectedRoute path="/me" element={<Me />} />
          <ProtectedRoute path="/statistics" element={<Statistics />} />
          <ProtectedRoute path="/account" element={<Account />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default (ProtectedRoute, AllRoutes);
