import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = (props) => {
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
