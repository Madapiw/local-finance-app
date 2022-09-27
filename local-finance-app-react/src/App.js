import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import RegisterForm from "./components/RegisterForm";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute';



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
          <Route path="/login" element={<LoginForm />} exact/>
          <Route path="/register" element={<RegisterForm />} exact/>
          <Route path="/" element={<Home />} exact/>
          <Route path='/home' element={<Home />} exact />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='dashboard' element={<Dashboard /> } exact />
            <Route path='/me' element={<Me /> } exact />
            <Route path='/statistics' element={<Statistics />} exact />
            <Route path='/account' element={<Account />} exact/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
