import { MODAL_SHOW, MODAL_CART_SHOW } from "./constants";

const initialStore = {
  modalShow: false,
  modalShowCart: false
};

export const modalShowReducer = (
  modalShowFromStore = initialStore.modalShow,
  action
) => {
  switch (action.type) {
    case MODAL_SHOW:
      return action.payload;
    default:
      return modalShowFromStore;
  }
};

export const modalShowCartReducer = (
  modalShowCartFromStore = initialStore.modalShowCart,
  action
) => {
  switch (action.type) {
    case MODAL_CART_SHOW:
      return action.payload;
    default:
      return modalShowCartFromStore;
  }
};
