export const comparePagesAsc = (a, b, c) => {
  if (a.numberOfPages > b.numberOfPages) {
    return -1;
  }
  if (a.numberOfPages < b.numberOfPages) {
    return 1;
  }
  return 0;
};

export const comparePagesDesc = (a, b, c) => {
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

export const sortHouseNameAsc = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};

export const sortHouseNameDesc = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const sortHouseRegionAsc = (a, b) => {
  if (a.region > b.region) {
    return -1;
  }
  if (a.region < b.region) {
    return 1;
  }
  return 0;
};

export const sortHouseRegionDesc = (a, b) => {
  if (a.region < b.region) {
    return -1;
  }
  if (a.region > b.region) {
    return 1;
  }
  return 0;
};

export const sortCultureAsc = (a, b) => {
  if (a.culture > b.culture) {
    return -1;
  }
  if (a.culture < b.culture) {
    return 1;
  }
  return 0;
};

export const sortCultureDesc = (a, b) => {
  if (a.culture < b.culture) {
    return -1;
  }
  if (a.culture > b.culture) {
    return 1;
  }
  return 0;
};

export const sortGenderAsc = (a, b) => {
  if (a.gender > b.gender) {
    return -1;
  }
  if (a.gender < b.gender) {
    return 1;
  }
  return 0;
};

export const sortGenderDesc = (a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
};
