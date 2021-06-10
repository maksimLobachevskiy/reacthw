import { LOAD_PRODUCTS } from "./constants";

export const loadProductsAction = () => (dispatch) => {
  return fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: LOAD_PRODUCTS, payload: data });
    });
};
