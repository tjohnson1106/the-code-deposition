import { combineReducers } from "redux";
import { createUser } from "./sign-in";
import { loginUser } from "./login";
import { logoutUser } from "./logout";

const reducers = combineReducers({
  signIn: createUser,
  login: loginUser,
  logout: logoutUser
});

export default reducers;
