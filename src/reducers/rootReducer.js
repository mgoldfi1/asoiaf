import { combineReducers } from "redux";
import navReducer from "./navReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  nav: navReducer,
  books: bookReducer
});

export default rootReducer;
