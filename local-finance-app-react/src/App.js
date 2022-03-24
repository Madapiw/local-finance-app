import React ,{ useState }from 'react';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom'; //zmiana ze Switch to Routes
import Dashboard from './Dashboard/dashboard';
import Preferences from './Preferences/preferences';
import Login from './Login/login';

function App() {
  const [token, setToken] = useState();
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
