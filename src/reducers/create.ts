export const createPost = (
  state = {
    post: {}
  },
  action: any
) => {
  if (action.type === "CREATE_POST") {
    state = { ...state, post: action.payload };
  }
  return state;
};
