import { GET_FORM_DATA, DELETE_ALL_PRODUCTS } from "./constants";

export const deleteAllProductsAction = () => (dispatch) => {
  return dispatch({
    type: DELETE_ALL_PRODUCTS,
    payload: []
  });
};

export const getFormDataAction = (formValues, productsCart) => (dispatch) => {
  return (
    dispatch(
      { type: GET_FORM_DATA, payload: formValues },
      console.log(formValues),
      console.log(productsCart)
    ),
    localStorage.removeItem("Cart")
  );
};
