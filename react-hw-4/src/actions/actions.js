export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const MODAL_SHOW = "MODAL_SHOW";
export const MODAL_CART_SHOW = "MODAL_CART_SHOW ";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_CURRENT_ID = "ADD_CURRENT_ID";
export const ADD_CURRENT_NAME = "ADD_CURRENT_NAME";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";

export const loadProductsAction = () => (dispatch) => {
  return fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: LOAD_PRODUCTS, payload: data });
    });
};

export const modalShowAction = (isOpen) => (dispatch) => {
  return dispatch({ type: MODAL_SHOW, payload: isOpen });
};

export const modalCartShowAction = (isOpen) => (dispatch) => {
  return dispatch({ type: MODAL_CART_SHOW, payload: isOpen });
};

export const addToCartAction = (cardAdd) => (dispatch) => {
  return dispatch({ type: ADD_TO_CART, payload: cardAdd });
};

export const addCurrentIdAction = (sku) => (dispatch) => {
  return dispatch({ type: ADD_CURRENT_ID, payload: sku });
};

export const addCurrentNameAction = (name) => (dispatch) => {
  return dispatch({ type: ADD_CURRENT_NAME, payload: name });
};

export const deleteFromCartAction = (sku) => (dispatch) => {
  return dispatch({ type: DELETE_FROM_CART, payload: sku });
};

export const addToFavoritesAction = (cardAdd) => (dispatch) => {
  return dispatch({ type: ADD_TO_FAVORITES, payload: cardAdd });
};

export const deleteFromFavoritesAction = (sku) => (dispatch) => {
  return dispatch({ type: DELETE_FROM_FAVORITES, payload: sku });
};
