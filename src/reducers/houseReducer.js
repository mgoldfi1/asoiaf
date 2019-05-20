import { sortHouseNameAsc } from "../utils/index";
import { sortHouseNameDesc } from "../utils/index";
import { sortHouseRegionAsc } from "../utils/index";
import { sortHouseRegionDesc } from "../utils/index";

const houseReducer = (
  state = { houses: [], loading: false, page: 1 },
  action
) => {
  switch (action.type) {
    case "FETCHING_HOUSES":
      console.log("HIT");
      return { ...state, loading: true };
    case "FETCHED_HOUSES":
      console.log("fetched");
      return { ...state, houses: action.payload, loading: false };
    case "SORT_HOUSES":
      console.log("HIT REDUCER");
      let sortedState;
      if (action.sort === "name") {
        let houses = [...state.houses];
        if (action.dir === "up") {
          sortedState = houses.sort(sortHouseNameAsc);
        } else {
          sortedState = houses.sort(sortHouseNameDesc);
        }
        console.log(state);
      } else {
        let houses = [...state.houses];
        if (action.dir === "up") {
          sortedState = houses.sort(sortHouseRegionAsc);
        } else {
          sortedState = houses.sort(sortHouseRegionDesc);
        }
        console.log("SORTED", sortedState);
      }
      return { ...state, houses: sortedState };
    default:
      return state;
  }
};

export default houseReducer;
