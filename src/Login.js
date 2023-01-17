import React from "react";
import "./App.css";

const Login = () => {
  const submittedLogin = () => {
    console.log("Login is submitted");
  };
  return (
    <div className="main-content">
      <h1>Login</h1>
      <div className="form-element">
        <input type="email" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <button type="submit" onClick={submittedLogin}>
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
