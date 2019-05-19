const bookReducer = (state = { books: [], loading: false }, action) => {
  switch (action.type) {
    case "FETCHING_BOOKS":
      console.log("HIT");
      return { ...state, loading: true };
    case "FETCHED_BOOKS":
      console.log("BOTH HIT");
      return { ...state, books: action.payload, loading: false };
    default:
      return state;
  }
};

export default bookReducer;
