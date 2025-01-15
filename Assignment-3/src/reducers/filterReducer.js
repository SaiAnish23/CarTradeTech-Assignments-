
import { SET_FUEL_FILTER, SET_BUDGET_FILTER, SET_PRICE_SORT, SET_LOADER, CLEAR_ALL } from '../utils/types.js';



const initialState = {
  filters: {
    fuel: [],
    budget: { min: 0, max: Infinity }
  },
  sortDirection: "asc",
  products: [],
  loading: false
};



export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FUEL_FILTER:
      // console.log( "Before updation:", action.payload);
      const updatedState1 = {
        ...state,
        filters: {
          ...state.filters,
          fuel: action.payload
        }
      };
      // console.log("After updation:", updatedState1);
      return updatedState1;


    case SET_BUDGET_FILTER:
      const updatedState = {
        ...state,
        filters: {
          ...state.filters,
          budget: action.payload
        }
      };
      // console.log("After updation:", updatedState);
      return updatedState;

    case SET_PRICE_SORT:
      return {
        ...state,
        sortDirection: action.payload
      };


    case SET_LOADER:
      return {
        ...state,
        loading: action.payload
      };

    case CLEAR_ALL:
      return {
        filters: {
          fuel: [],
          budget: { min: 0, max: Infinity }
        },
        sortDirection: "asc",
        products: [],
        loading: false
      }

    default:
      return state;
  }
};

export default filterReducer;