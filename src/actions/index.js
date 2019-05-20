import { ninvoke } from "q";

export const selectTab = tab => {
  console.log(tab);
  return dispatch => {
    dispatch({ type: "SELECT_TAB", tab: tab });
  };
};

export const setLoading = () => {
  return async dispatch => {
    try {
      dispatch({ type: "FETCHING_BOOKS" });
      const res = await fetch("https://www.anapioficeandfire.com/api/books");
      const result = await res.json();
      dispatch({ type: "FETCHED_BOOKS", payload: [...result] });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortBooks = (sort, dir) => {
  const query = sort === "release" ? "released" : "numberOfPages";
  console.log(dir);
  return dispatch => {
    dispatch({ type: "SORT_BOOKS", sort: query, dir: dir });
  };
};

export const fetchHouses = page => {
  return async dispatch => {
    try {
      dispatch({ type: "FETCHING_HOUSES" });
      const res = await fetch(
        "https://www.anapioficeandfire.com/api/houses?page=" + page
      );
      const result = await res.json();
      dispatch({ type: "FETCHED_HOUSES", payload: [...result] });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortHouses = (sort, dir) => {
  console.log(dir);
  return dispatch => {
    dispatch({ type: "SORT_HOUSES", sort: sort, dir: dir });
  };
};
