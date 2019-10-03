import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createUser } from "../actions/sign-in";
import { Redirect } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, _setRedirect] = useState(false);
  const dispatch = useDispatch();
  const createUserAction = (email: string, password: string) =>
    dispatch(createUser(email, password));

  const signin = async (e: Event) => {
    e.preventDefault();
    console.log("user created", email, password);

    if (email !== "" && password !== "") {
      await createUserAction(email, password);
      // setRedirect(true)
    } else {
      console.log("missing credentials", _setRedirect);
    }
  };

  const redirectTo = routeRedirect;

  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form action="" onSubmit={signin as any}>
        <p>Create an Account</p>
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
        <input type="submit" value="Create an account" />
      </form>
    </>
  );
};

export default SignIn;
