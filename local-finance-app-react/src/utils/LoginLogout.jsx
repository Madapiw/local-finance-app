import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";

function LoginLogout {
    const adminUser = {
    email: "admin",
    password: "1234"
  }

  const [user, setUser] = useState({name:"",email: ""});
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
  
  render() {
    return (
      <div>LoginLogout</div>
    )
  }
}

export default { Login, Logout }
