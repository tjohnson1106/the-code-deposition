import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import Firebase from "../firebase/config";
// import { logoutUser } from "../actions/logout";

const Nav = () => {
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
      </ul>
      <ul></ul>
    </nav>
  );
};

export default withRouter(Nav);
