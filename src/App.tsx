import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/loginbox/LoginBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Login Example in React
        </p>

        <LoginBox
          textBefore="Login with your username and password:"
          textAfter=""
          welcomeMsg="Welcome! redirecting...."
          warning="Invalid credentials"
        />

      </header>
    </div>
  );
}

export default App;
