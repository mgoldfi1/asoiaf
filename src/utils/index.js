export const comparePages = (a, b) => {
  if (a.numberOfPages > b.numberOfPages) {
    return -1;
  }
  if (a.numberOfPages < b.numberOfPages) {
    return 1;
  }
  return 0;
};

export const compareYears = (a, b) => {
  if (a.released.split("-")[0] > b.released.split("-")[0]) {
    return -1;
  }
  if (a.released.split("-")[0] < b.released.split("-")[0]) {
    return 1;
  }
  return 0;
};
