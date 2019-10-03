import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser } from "../actions/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const loginUserAction = (email: string, password: string) =>
    dispatch(loginUser(email, password));

  const loginForm = async (e: Event) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let user = await loginUserAction(email, password);
      console.log("========", user, "========");
      if (user) {
        setRedirect(true);
      } else {
        console.log("Need to add credentials", redirect);
      }
      //   100220191716
      //   was receiving not all code paths return a value for this method
      //  before adding return statement be sure to check behaviour
      return user as any;
    }

    const redirectTo = redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }
    console.log("redirect to /", redirectTo);
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
