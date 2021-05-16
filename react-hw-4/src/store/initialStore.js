const initialStore = {
  items: [],
  currentId: null,
  currentName: null,
  modalShow: false,
  modalShowCart: false,
  productsCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  productsFavorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};
export default initialStore;
