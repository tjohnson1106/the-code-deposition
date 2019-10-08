import { combineReducers } from "redux";

import { createUser } from "./sign-in";
import { loginUser } from "./login";
import { logoutUser } from "./logout";
import { createPost } from "./create";

const reducers = combineReducers({
  signIn: createUser,
  login: loginUser,
  logout: logoutUser,
  create: createPost
});

export default reducers;
