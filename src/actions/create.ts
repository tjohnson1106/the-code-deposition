import firebase from "../firebase/config";

export const createPost = (post: {
  cover: { name: string };
  title: string;
  content: any;
}) => {
  return async function(dispatch: any) {
    const firestorePost = await firebase.createPost(post);
    dispatch({
      type: "CREATE POST",
      payload: firestorePost
    });
  };
};
