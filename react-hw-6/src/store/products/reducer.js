import { LOAD_PRODUCTS } from "./constants";

const initialStore = {
  items: []
};

export const productsReducer = (
  productsFromStore = initialStore.items,
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload;

    default:
      return productsFromStore;
  }
};
