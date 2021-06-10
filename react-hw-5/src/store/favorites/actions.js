import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./constants";

export const addToFavoritesAction = (cardAdd) => (dispatch) => {
  return dispatch({ type: ADD_TO_FAVORITES, payload: cardAdd });
};

export const deleteFromFavoritesAction = (sku) => (dispatch) => {
  return dispatch({ type: DELETE_FROM_FAVORITES, payload: sku });
};
