import {
  ADD_TO_CART,
  ADD_CURRENT_ID,
  ADD_CURRENT_NAME,
  DELETE_FROM_CART
} from "./constants";

export const addToCartAction = (cardAdd) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: cardAdd
  });
};

export const addCurrentIdAction = (sku) => (dispatch) => {
  return dispatch({
    type: ADD_CURRENT_ID,
    payload: sku
  });
};

export const addCurrentNameAction = (name) => (dispatch) => {
  return dispatch({
    type: ADD_CURRENT_NAME,
    payload: name
  });
};

export const deleteFromCartAction = (sku) => (dispatch) => {
  return dispatch({
    type: DELETE_FROM_CART,
    payload: sku
  });
};
