import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import firebase from "../firebase/config";
import { logoutUser } from "../actions/logout";

const Nav = (props: any) => {
  const loginSelector = useSelector((state: any) => state.login);
  const signInSelector = useSelector((state: any) => state.signIn);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser);

  useEffect(() => {
    firebase.getUserState().then((user: any) => {
      setUserState(user);
    });
  });

  const logout = async () => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/");
  };

  let buttons;

  if (
    (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
    (signInSelector.user && signInSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    buttons = (
      <>
        <li>
          <button className="logout" onClick={logout}>
            Log Out
          </button>
        </li>
      </>
    );
  } else {
    buttons = (
      <>
        <li>
          <Link to="/signIn">Register</Link>
        </li>

        <li>
          <Link to="/signIn">Log In</Link>
        </li>
      </>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Code Deposition</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">new post</Link>
        </li>
        {buttons}
      </ul>
      <ul></ul>
    </nav>
  );
};

export default withRouter(Nav);
