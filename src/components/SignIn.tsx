import React, { useState } from "react";

// import { createUser } from "../actions/sign-in";

const SignIn = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  const signin = (e: Event) => {
    e.preventDefault();
    console.log("user created", _email, _password);
  };

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
