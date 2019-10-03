import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";

// import { loginUser } from "../actions/login";

const Login = () => {
  const loginForm = (e) => {
    e.preventDefault();
    console.log("login user");
  };
  return (
    <>
      <form onSubmit={loginForm}>
        <p>Welcome Back</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          //   onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          //   onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default Login;
