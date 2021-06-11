import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./constants";

const initialStore = {
  productsFavorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : []
};

export const productsFavoritesReducer = (
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
        )
      ];

    default:
      return productsFavoritesFromStore;
  }
};
