import { createContext, useReducer } from "react";
import { newSearch, resetSearch } from "./actionTypes";

const initialState = {
  search: undefined,
  date: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(initialState);

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case newSearch:
      return action.payload;
    case resetSearch:
      return initialState;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
