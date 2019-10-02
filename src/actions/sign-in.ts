import firebase from "../firebase/config";

export const createUser = (email: string, password: string) => {
  return async function(dispatch: any) {
    // signin method declared in config
    const user = await firebase.signin(email, password);
    console.log(user);
    dispatch({
      type: "CREATE_USER",
      payload: user
    });
  };
};
