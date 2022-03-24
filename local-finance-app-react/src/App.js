import React ,{ useState }from 'react';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom'; //zmiana ze Switch to Routes
import Dashboard from './Dashboard/dashboard';
import Preferences from './Preferences/preferences';
import Login from './Login/login';

function setToken(userToken) {
  sessionStorage.setItem('SessionToken',JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('SessionToken');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  //const token = getToken();

  const [token, setToken] = useState(getToken());
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/preferences" element={<Preferences />}/> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
