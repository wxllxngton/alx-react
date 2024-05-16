import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <React.Fragment>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <form className="loginForm">
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" />
                    <label htmlFor="password"> Password: </label>
                    <input id="password" type="text" />
                    <button id="btnForm">OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}
