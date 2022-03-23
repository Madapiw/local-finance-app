import React from "react";
import './login.css';

export default function Login() {
    return(
        <div className="login-wrapper">
            <h1>Login to Local Finance App</h1>
        <form>
            <label>
                <h5>Username</h5>
                <input type='text' />
            </label>
            <label>
                <h5>Password</h5>
                <input type='password' />
            </label>
            <button type='submit'>Sign in</button>
        </form>
        </div>
    );
};