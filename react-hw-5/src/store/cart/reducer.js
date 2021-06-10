import {
  ADD_TO_CART,
  ADD_CURRENT_ID,
  ADD_CURRENT_NAME,
  DELETE_FROM_CART
} from "./constants";

const initialStore = {
  currentId: null,
  currentName: null,
  productsCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : []
};

export const currentIdReducer = (
  currentIdFromStore = initialStore.currentId,
  action
) => {
  switch (action.type) {
    case ADD_CURRENT_ID:
      return action.payload;

    default:
      return currentIdFromStore;
  }
};

export const currentNameReducer = (
  currentNameFromStore = initialStore.currentName,
  action
) => {
  switch (action.type) {
    case ADD_CURRENT_NAME:
      return action.payload;

    default:
      return currentNameFromStore;
  }
};

export const productsCartReducer = (
  productsCartFromStore = initialStore.productsCart,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...productsCartFromStore, action.payload];
    case DELETE_FROM_CART:
      return [
        ...productsCartFromStore.filter((card) => card.sku !== action.payload)
      ];

    default:
      return productsCartFromStore;
  }
};
