import { combineReducers } from "redux";
import {
  currentIdReducer,
  currentNameReducer,
  productsCartReducer
} from "../cart/reducer";
import { productsReducer } from "../products/reducer";
import { modalShowReducer, modalShowCartReducer } from "../modal/reducer";
import { productsFavoritesReducer } from "../favorites/reducer";

const reducer = combineReducers({
  currentId: currentIdReducer,
  currentName: currentNameReducer,
  items: productsReducer,
  modalShow: modalShowReducer,
  modalShowCart: modalShowCartReducer,
  productsCart: productsCartReducer,
  productsFavorites: productsFavoritesReducer
});

export default reducer;
