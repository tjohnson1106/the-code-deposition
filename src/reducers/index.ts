import { combineReducers } from "redux";
import { createUser } from "./sign-in";

const reducers = combineReducers({
  signIn: createUser
});

export default reducers;
