export const comparePagesAsc = (a, b, c) => {
  console.log("FUNCTION RECEIVED", c);
  if (a.numberOfPages > b.numberOfPages) {
    return -1;
  }
  if (a.numberOfPages < b.numberOfPages) {
    return 1;
  }
  return 0;
};

export const comparePagesDesc = (a, b, c) => {
  console.log("FUNCTION RECEIVED", c);
  if (a.numberOfPages < b.numberOfPages) {
    return -1;
  }
  if (a.numberOfPages > b.numberOfPages) {
    return 1;
  }
  return 0;
};
export const compareYearsAsc = (a, b) => {
  if (a.released.split("-")[0] > b.released.split("-")[0]) {
    return -1;
  }
  if (a.released.split("-")[0] < b.released.split("-")[0]) {
    return 1;
  }
  return 0;
};

export const compareYearsDesc = (a, b) => {
  if (a.released.split("-")[0] < b.released.split("-")[0]) {
    return -1;
  }
  if (a.released.split("-")[0] > b.released.split("-")[0]) {
    return 1;
  }
  return 0;
};
