import { combineReducers } from "redux";
import initialStore from "../store/initialStore";
import {
  LOAD_PRODUCTS,
  MODAL_SHOW,
  MODAL_CART_SHOW,
  ADD_TO_CART,
  DELETE_FROM_CART,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  ADD_CURRENT_ID,
  ADD_CURRENT_NAME,
} from "../actions/actions";

const productsReducer = (productsFromStore = initialStore.items, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload;

    default:
      return productsFromStore;
  }
};
const modalShowReducer = (
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

const modalShowCartReducer = (
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

const currentIdReducer = (
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

const currentNameReducer = (
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

const productsCartReducer = (
  productsCartFromStore = initialStore.productsCart,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...productsCartFromStore, action.payload];
    case DELETE_FROM_CART:
      return [
        ...productsCartFromStore.filter((card) => card.sku !== action.payload),
      ];

    default:
      return productsCartFromStore;
  }
};

const productsFavoritesReducer = (
  productsFavoritesFromStore = initialStore.productsFavorites,
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...productsFavoritesFromStore, action.payload];
    case DELETE_FROM_FAVORITES:
      return [
        ...productsFavoritesFromStore.filter(
          (card) => card.sku !== action.payload
        ),
      ];

    default:
      return productsFavoritesFromStore;
  }
};

export default combineReducers({
  currentId: currentIdReducer,
  currentName: currentNameReducer,
  items: productsReducer,
  modalShow: modalShowReducer,
  modalShowCart: modalShowCartReducer,
  productsCart: productsCartReducer,
  productsFavorites: productsFavoritesReducer,
});
