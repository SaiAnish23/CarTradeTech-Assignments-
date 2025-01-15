import { SET_FUEL_FILTER, SET_BUDGET_FILTER, SET_PRICE_SORT, SET_PRODUCTS  , SET_LOADER , CLEAR_ALL} from '../utils/types.js';



export const setFuelFilter = (fuelTypes) => ({
    type: SET_FUEL_FILTER,
    payload: fuelTypes
});
  
  export const setBudgetFilter = (budgetRange) => ({
    type: SET_BUDGET_FILTER,
    payload: budgetRange
  });
  
  export const setPriceSort = (sortDirection) => ({
    type: SET_PRICE_SORT,
    payload: sortDirection
  });
  
  // export const setProducts = (products) => ({
  //   type: SET_PRODUCTS,
  //   payload: products
  // });
  

  export const clearAll = () => ({
    type: CLEAR_ALL
  });

  export const setLoader = (loading) => ({ 
    type: SET_LOADER,
    payload: loading
  })