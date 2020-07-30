import React, { createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialState = {
    isLoggedIn: false,
    userId: null,
    token: null,
  };

  const [auth, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
