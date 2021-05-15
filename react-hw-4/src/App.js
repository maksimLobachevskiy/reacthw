import styles from "./App.module.scss";
import React, { useEffect } from "react";
import Modal from "./components/modal/Modal";
import Routes from "./components/routes/Routes";
import Button from "./components/button/Button";
import { connect } from "react-redux";
import {
  loadProductsAction,
  modalShowAction,
  modalCartShowAction,
  addToCartAction,
  deleteFromCartAction,
  addToFavoritesAction,
  deleteFromFavoritesAction,
  addCurrentIdAction,
  addCurrentNameAction,
} from "./actions/actions";

const App = ({
  items,
  addCurrentId,
  addCurrentName,
  loadProducts,
  modalShow,
  modalOpen,
  modalShowCart,
  modalCartOpen,
  productsCart,
  addCardsCart,
  deleteFromCart,
  productsFavorites,
  addFavorites,
  deleteFromFavorites,
  currentName,
  currentId,
}) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const addToCart = (currentId) => {
    if (!productsCart.find((card) => card.sku === currentId)) {
      const newCard = items.filter((card) => card.sku === currentId);
      const [{ ...cardAdd }] = newCard;
      addCardsCart(cardAdd);
      modalOpen(false);
    }
  };

  const deleteProduct = (currentId) => {
    deleteFromCart(currentId);
    modalCartOpen(false);
  };

  const addToFavorites = (id) => {
    if (!productsFavorites.find((card) => card.sku === id)) {
      const newCard = items.filter((card) => card.sku === id);
      const [{ ...addToFavorite }] = newCard;
      addFavorites(addToFavorite);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...productsFavorites, addToFavorite])
      );
    }
  };

  const deleteFavorites = (id) => {
    deleteFromFavorites(id);
    localStorage.setItem(
      "favorites",
      JSON.stringify([...productsFavorites.filter((card) => card.sku !== id)])
    );
  };

  const openModal = (id) => {
    modalOpen(true);
    const newCard = items.filter((card) => card.sku === id);
    const [{ ...cardAdd }] = newCard;
    addCurrentId(cardAdd.sku);
    addCurrentName(cardAdd.name);
  };

  const openDeleteModal = (id) => {
    modalCartOpen(true);
    const newCard = items.filter((card) => card.sku === id);
    const [{ ...cardAdd }] = newCard;
    addCurrentId(cardAdd.sku);
  };

  const modalClose = () => {
    modalOpen(false);
  };
  const modalCloseCart = () => {
    modalCartOpen(false);
  };

  return (
    <div className={styles.App}>
      <Routes
        main={styles.main}
        items={items}
        productsCart={productsCart}
        productsFavorites={productsFavorites}
        onClick={openModal}
        deleteProduct={openDeleteModal}
        addToFavorites={addToFavorites}
        deleteFavorites={deleteFavorites}
      />
      {modalShow && (
        <Modal
          modalOne={true}
          onClick={modalClose}
          header={currentName}
          closeButton={true}
          text={`Do you want to buy ${currentName}?`}
          actions={
            <>
              <Button
                onClick={() => addToCart(currentId)}
                text="Ok"
                color="#d64531"
              />
              <Button
                text="Cancel"
                color="#d64531"
                onClick={() => modalClose()}
              />
            </>
          }
        />
      )}
      {modalShowCart && (
        <Modal
          modalOne={true}
          onClick={modalCloseCart}
          header={"Do you want to delete this item?"}
          closeButton={true}
          text={"The item will be removed from your cart! Do you confirm it?"}
          actions={
            <>
              <Button
                text="OK"
                color="#d64531"
                onClick={() => deleteProduct(currentId)}
              />

              <Button
                text="CANCEL"
                color="#d64531"
                onClick={() => modalCloseCart()}
              />
            </>
          }
        />
      )}
    </div>
  );
};

const mapStoreToProps = ({
  productsCart,
  items,
  modalShow,
  modalShowCart,
  productsFavorites,
  currentId,
  currentName,
}) => {
  return {
    items,
    modalShow,
    productsCart,
    modalShowCart,
    productsFavorites,
    currentId,
    currentName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(loadProductsAction()),
    modalOpen: (isOpen) => dispatch(modalShowAction(isOpen)),
    modalCartOpen: (isOpen) => dispatch(modalCartShowAction(isOpen)),
    addCardsCart: (cardAdd) => dispatch(addToCartAction(cardAdd)),
    deleteFromCart: (sku) => dispatch(deleteFromCartAction(sku)),
    addFavorites: (cardAdd) => dispatch(addToFavoritesAction(cardAdd)),
    deleteFromFavorites: (sku) => dispatch(deleteFromFavoritesAction(sku)),
    addCurrentId: (sku) => dispatch(addCurrentIdAction(sku)),
    addCurrentName: (name) => dispatch(addCurrentNameAction(name)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(App);
