import { MODAL_SHOW, MODAL_CART_SHOW } from "./constants";

export const modalShowAction = (isOpen) => (dispatch) => {
  return dispatch({ type: MODAL_SHOW, payload: isOpen });
};

export const modalCartShowAction = (isOpen) => (dispatch) => {
  return dispatch({ type: MODAL_CART_SHOW, payload: isOpen });
};
