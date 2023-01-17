import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  });

  const submitUser = (e) => {
    e.preventDefault();
    const data = { email, password };

    //mistake spotted-why?
    // axios.post('http://localhost:4000/register',data).then

    axios({ method: "post", url: "http://localhost:4000/register", data }).then(
      (response) => {
        user.setEmail(response.data.email);
      }
    );
  };

  return (
    <div>
      <form action="" onSubmit={(e) => submitUser(e)}>
        <h1>Register</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Register</button>
      </form>
      <div>{email}</div>
    </div>
  );
};

export default Register;
