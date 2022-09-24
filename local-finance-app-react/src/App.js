import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import RegisterForm from "./components/RegisterForm";
import { Route, Routes , BrowserRouter, Link} from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function App() {
  // <div className="App">
  //   {(user.email !== "") ? (
  //     <div className="page">

  //       <button onClick={Logout} >Logout </button>
  //     </div>
  //   ) : <LoginForm Login={Login} error={error}/>}
  // </div>

  return(
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} />
          {/* Protected Routes */}
          {/* <ProtectedRoute path="/dashboard" element={<Dashboard />} />
          <ProtectedRoute path="/me" element={<Me />} />
          <ProtectedRoute path="/statistics" element={<Statistics />} />
          <ProtectedRoute path="/account" element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
