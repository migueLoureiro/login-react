import React from 'react';
import './loginbox.css';

const LoggedOut = "loggedOut"

function LoginBox(
  { textBefore, textAfter, login }: 
  { textBefore: String, textAfter: string,
    login: (username: string, password: string) => [Boolean, string] }) {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loginMsg, setLoginMsg] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<Boolean>(false);

  function handleLogin(username: string, password: string) {
    
    const [loggedIn, msg] = login(username, password);
    if (!loggedIn){
      console.error("error logging in: "+msg);
      setLoginMsg(msg);
    }else{
      setLoginMsg(msg);
      setLoggedIn(true);
    }
  }

  function handleLogout() {
    setUsername("");
    setPassword("");
    setLoginMsg("");
    setLoggedIn(false);
  }

  var loginBox;
  if (loggedIn === true){
    loginBox = (
      <div className="loginbox">
        <p> {loginMsg}</p>
        <button type="submit" onClick={() => handleLogout()}>Logout</button>
      </div>
    );
  }else{

    loginBox = (
      <div className="loginbox">
        <label> {textBefore} </label>
        <br></br>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={e => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={p => setPassword(p.target.value)}
        />
        <br></br>

        <button type="submit" onClick={() => handleLogin(username, password)}>Login</button>

        {
          loginMsg !== "" && !loggedIn &&
          <p className="warning">{loginMsg}</p>
        }

        <p>{textAfter}</p>
      </div>
    );
  }

  return (
    loginBox
  );
}

export default LoginBox;
