import React , { useState }from "react";
import './login.css';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8000/login',{
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({setToken}) {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            Username,
            Password
        });
        setToken(token);
    };

    return(
        <div className="login-wrapper">
            <h1>Login to Local Finance App</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <h5>Username</h5>
                <input type='text' onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <h5>Password</h5>
                <input type='password' onChange={e => setPassword(e.target.value)} />
            </label>
            <br/>
            <button type='submit'>Sign in</button>
        </form>
        </div>
    )};

Login.propTypes = {
    setToken: PropTypes.isRequired
}