import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";

// import { loginUser } from "../actions/login";

const Login = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  const loginForm = (e: Event) => {
    e.preventDefault();
    console.log("login user", _password, _email);
  };
  return (
    <>
      <form onSubmit={loginForm as any}>
        <p>Welcome Back</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default Login;
