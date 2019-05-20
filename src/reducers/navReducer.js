const navReducer = (state = { currentTab: "Books" }, action) => {
  switch (action.type) {
    case "SELECT_TAB":
      return { ...state, currentTab: action.tab };
    default:
      return state;
  }
};

export default navReducer;
