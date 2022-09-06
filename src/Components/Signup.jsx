import React from "react"
import './Signup.css';
import Title from "./Title";

function Signup() {
  return (
    <div>
      <Title />
      <h1>Sign Up</h1>
      <div className="main">
        <div className="Reg">
          <form action="">
            <input type="text" name="firstname" placeholder="First Name" id="firstname" />

            <input type="text" name="lastname" placeholder="Last Name" id="lastname" />
            
            <input type="text" name="dob" placeholder="Date of Birth" id="dob" />
            
            <input type="text" name="Email" placeholder="Email" id="email" />
            
            <input type="password" name="password" placeholder="Password" id="password" />

            <input type="password" name="password" placeholder="Conform Password" id="password" />
            
            <button className="btn" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;