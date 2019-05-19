export const selectTab = tab => {
  console.log(tab);
  return dispatch => {
    dispatch({ type: "SELECT_TAB", tab: tab });
  };
};
