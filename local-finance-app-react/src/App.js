import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import { Route, Routes} from "react-router-dom"
import RegisterForm from "./components/RegisterForm";

function App() {

  const adminUser = {
    email: "admin",
    password: "1234"
  }

  const [user, setUser] = useState({name:"admin",email: "1234"});
  const [error, setError] = useState("");

  const Login = details => {
    if (details.email === adminUser.email && details.password === adminUser.password){
        console.log('Logged in')
        setUser({
          name: details.name,
          email: details.email
        });
    } else {
      setError("Login or Password do not match");
    }

    console.log(details);
  }

  const Logout = () => {
    setUser({name: "" ,email: ""});
  }

 
  // <div className="App"> 
  //   {(user.email !== "") ? (
  //     <div className="page">
          
  //       <button onClick={Logout} >Logout </button>
  //     </div>
  //   ) : <LoginForm Login={Login} error={error}/>}
  // </div>

/*    
*/
// const IsLogged 

  return(
      <Routes>

        <Route path='/' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/me' element={<Me />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
  );
}

export default App;
