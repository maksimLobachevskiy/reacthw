import { GET_FORM_DATA } from "./constants";

const initialStore = {
  checkoutFormValues: []
};

export const getFormDataReducer = (
  store = initialStore.checkoutFormValues,
  action
) => {
  switch (action.type) {
    case GET_FORM_DATA:
      return [...store, action.payload];
    default:
      return store;
  }
};
