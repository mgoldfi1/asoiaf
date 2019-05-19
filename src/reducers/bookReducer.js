import { comparePages } from "../utils/index";
import { compareYears } from "../utils/index";
const bookReducer = (state = { books: [], loading: false }, action) => {
  switch (action.type) {
    case "FETCHING_BOOKS":
      console.log("HIT");
      return { ...state, loading: true };
    case "FETCHED_BOOKS":
      console.log("BOTH HIT");
      return { ...state, books: action.payload, loading: false };
    case "SORT_BOOKS":
      let sortedState;
      if (action.sort === "released") {
        let books = [...state.books];
        sortedState = books.sort(compareYears);
        console.log(state);
      } else {
        let books = [...state.books];
        sortedState = books.sort(comparePages);
        console.log("SORTED", sortedState);
      }
      return { ...state, books: sortedState };
    default:
      return state;
  }
};

export default bookReducer;
