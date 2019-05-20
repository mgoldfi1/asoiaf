import { ninvoke } from "q";

export const selectTab = tab => {
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortBooks = (sort, dir) => {
  const query = sort === "release" ? "released" : "numberOfPages";
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortHouses = (sort, dir) => {
  return dispatch => {
    dispatch({ type: "SORT_HOUSES", sort: sort, dir: dir });
  };
};

export const changePage = page => {
  return dispatch => {
    dispatch({ type: "CHANGE_PAGE", page: page });
  };
};

export const cacheHouseData = data => {
  return dispatch => {
    dispatch({ type: "CACHE_HOUSE_DATA", payload: data });
  };
};

export const fetchMembers = links => {
  return async dispatch => {
    const memberData = [];
    try {
      dispatch({ type: "FETCHING_MEMBERS" });
      links.forEach(link => {
        fetch(link)
          .then(res => res.json())
          .then(result => {
            memberData.push(result);
          });
      });
      dispatch({ type: "FETCHED_MEMBERS", payload: memberData });
    } catch (error) {
      console.log(error);
    }
  };
};
