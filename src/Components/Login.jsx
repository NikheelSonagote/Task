import React from "react";
import './Login.css';
import Title from "./Title";

function Login() {
  return (
    <div>
      <Title />
      <h1>Login</h1>
      <div className="main-login">
        <div className="Reg-login">
          <form action="">

            <input type="text" name="Email" placeholder="Email" id="email" />
            
            <input type="text" name="Password" placeholder="Password" id="Password" />
            
            <button className="btn-login" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;