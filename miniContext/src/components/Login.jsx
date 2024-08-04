import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password , username);
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      {"  "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
