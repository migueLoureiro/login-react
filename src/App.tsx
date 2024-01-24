import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/loginbox/LoginBox';

var expectedUsername = "user";
var expectedPassword = "password";

function App() {

  function loginFunc(username: string, password: string): [Boolean, string] {
    if ( username === expectedUsername &&
      password === expectedPassword){
        return [true, "Welcome "+username+"! Redirecting..."];
    } else{
        return [false, "invalid credentials!..."];
    }
  }

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
          login={loginFunc}
        />

      </header>
    </div>
  );
}

export default App;
