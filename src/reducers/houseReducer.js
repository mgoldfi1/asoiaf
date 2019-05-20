import { sortHouseNameAsc } from "../utils/index";
import { sortHouseNameDesc } from "../utils/index";
import { sortHouseRegionAsc } from "../utils/index";
import { sortHouseRegionDesc } from "../utils/index";

const houseReducer = (
  state = {
    houses: [],
    loading: false,
    page: 1,
    houseData: {},
    swornMembers: []
  },
  action
) => {
  switch (action.type) {
    case "FETCHING_HOUSES":
      return { ...state, loading: true };
    case "FETCHED_HOUSES":
      return { ...state, houses: action.payload, loading: false };
    case "FETCHING_MEMBERS":
      return { ...state, loading: true };
    case "FETCHED_MEMBERS":
      console.log("THIS:", action.payload);
      return {
        ...state,
        swornMembers: action.payload,
        loading: false
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.page
      };
    case "CACHE_HOUSE_DATA":
      return { ...state, houseData: action.payload };
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
