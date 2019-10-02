export const logoutUser = (
  state = {
    user: {}
  },
  action: any
) => {
  if (action.type === "LOGOUT_USER") {
    state = { ...state, user: action.payload };
  }
  return state;
};
