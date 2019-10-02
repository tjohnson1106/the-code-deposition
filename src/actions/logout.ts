import firebase from "../firebase/config";

export const logoutUser = () => {
  return async function(dispatch: any) {
    await firebase.logout();
    dispatch({
      type: "LOGIN_USER",
      payload: {}
    });
    dispatch({
      type: "CREATE_USER",
      payload: {}
    });
  };
};
