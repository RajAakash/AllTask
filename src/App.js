import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios({ method: "get", url: "http://localhost:4000/user" });
  }, []);

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <BrowserRouter>
        <div>
          {!!email && <div>Logged in as {email}</div>}
          {!email && <div>Not logged in.</div>}
        </div>
        <div>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
