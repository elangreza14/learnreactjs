export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        isLoggedIn: true,
        userId: action.userId,
        token: action.token,
      };
    case "SIGN_OUT":
      return {
        isLoggedIn: false,
        userId: null,
        token: null,
      };
    default:
      return state;
  }
};
