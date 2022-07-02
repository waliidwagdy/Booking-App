import { createContext, useEffect, useReducer } from "react";
import { loginFail, loginStart, loginSuccess, logout } from "./actionTypes";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case loginStart:
      return {
        user: null,
        loading: true,
        error: null,
      };
    case loginSuccess:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case loginFail:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case logout:
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
