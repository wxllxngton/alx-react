import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';

function App() {
    return (
        <>
            <header className="App-header">
                <img src={logo} alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <div className="login-form">
                    <label htmlFor="form-email">Email: </label>
                    <input type="text" id="form-email" name="login-email" />
                    <label htmlFor="form-password">Password: </label>
                    <input
                        type="password"
                        id="form-password"
                        name="login-password"
                    />
                    <button type="submit">OK</button>
                </div>
            </div>
            <footer className="App-footer">
                <p>Copyright 2024 - Holberton School</p>
            </footer>
        </>
    );
}

export default App;
