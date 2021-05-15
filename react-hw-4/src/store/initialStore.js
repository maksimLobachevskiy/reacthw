const initialStore = {
  items: [],
  currentId: null,
  currentName: null,
  modalShow: false,
  modalShowCart: false,
  productsCart: [],
  productsFavorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};
export default initialStore;
