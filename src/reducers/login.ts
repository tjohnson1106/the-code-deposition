export const loginUser = (
  state = {
    user: {}
  },
  action: any
) => {
  if (action.type === "LOGIN_USER") {
    state = { ...state, user: action.payload };
  }
  return state;
};
