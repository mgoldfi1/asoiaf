import { comparePagesAsc } from "../utils/index";
import { comparePagesDesc } from "../utils/index";
import { compareYearsAsc } from "../utils/index";
import { compareYearsDesc } from "../utils/index";

const bookReducer = (state = { books: [], loading: false }, action) => {
  switch (action.type) {
    case "FETCHING_BOOKS":
      return { ...state, loading: true };
    case "FETCHED_BOOKS":
      console.log("BOTH HIT");
      return { ...state, books: action.payload, loading: false };
    case "SORT_BOOKS":
      let sortedState;
      if (action.sort === "released") {
        let books = [...state.books];
        if (action.dir === "up") {
          sortedState = books.sort(compareYearsAsc);
        } else {
          sortedState = books.sort(compareYearsDesc);
        }
      } else {
        let books = [...state.books];
        if (action.dir === "up") {
          sortedState = books.sort(comparePagesAsc);
        } else {
          sortedState = books.sort(comparePagesDesc);
        }
      }
      return { ...state, books: sortedState };
    default:
      return state;
  }
};

export default bookReducer;
