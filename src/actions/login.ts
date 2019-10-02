import firebase from "../firebase/config";

export const loginUser = (email: string, password: string) => {
  return async function(dispatch: any) {
    const user = await firebase
      .login(email, password)
      .catch((err) => console.log(err));

    if (user) {
      dispatch({
        type: "LOGIN_USER",
        payload: user
      });
      return user;
    }
  };
};
