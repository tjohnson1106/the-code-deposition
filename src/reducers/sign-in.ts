export const createUser = (
  state = {
    user: {}
  },
  action: {
    type: string;
    payload: any;
  }
) => {
  if (action.type === "CREATE_USER") {
    state = { ...state, user: action.payload };
  }
  return state;
};
