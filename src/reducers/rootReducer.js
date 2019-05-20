import { combineReducers } from "redux";
import navReducer from "./navReducer";
import bookReducer from "./bookReducer";
import houseReducer from "./houseReducer";
const rootReducer = combineReducers({
  nav: navReducer,
  books: bookReducer,
  houses: houseReducer
});

export default rootReducer;
