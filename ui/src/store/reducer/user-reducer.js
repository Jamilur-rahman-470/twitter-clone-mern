const initState = {
  token: null,
  is_auth: false,
  user: null,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN":
      break;

    default:
      return state;
  }
};
