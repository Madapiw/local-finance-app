import React, {  Switch } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";


function App() {
  // <div className="App">
  //   {(user.email !== "") ? (
  //     <div className="page">

  //       <button onClick={Logout} >Logout </button>
  //     </div>
  //   ) : <LoginForm Login={Login} error={error}/>}
  // </div>

  return(
    <div>
      <Home />
    </div>
  );
}

export default App;
