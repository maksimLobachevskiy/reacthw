import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
import Routes from "./components/routes/Routes";
import Button from "./components/button/Button";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentId, setIcurrentId] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowCart, setModalShowCart] = useState(false);
  const [productsCart, setProductsCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [productsFavorites, setProductsFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (currentId) => {
    if (!productsCart.find((card) => card.sku === currentId)) {
      const newCard = items.filter((card) => card.sku === currentId);
      const [{ ...addToCard }] = newCard;
      setProductsCart([...productsCart, addToCard]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...productsCart, addToCard])
      );
      setModalShow(false);
    }
  };

  const addToFavorites = (id) => {
    if (!productsFavorites.find((card) => card.sku === id)) {
      const newCard = items.filter((card) => card.sku === id);
      const [{ ...addToFavorite }] = newCard;
      setProductsFavorites([...productsFavorites, addToFavorite]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...productsFavorites, addToFavorite])
      );
    }
  };

  const deleteProduct = (currentId) => {
    setProductsCart([...productsCart.filter((card) => card.sku !== currentId)]);
    setModalShowCart(false);
    localStorage.setItem(
      "cart",
      JSON.stringify([...productsCart.filter((card) => card.sku !== currentId)])
    );
  };

  const deleteFavorites = (id) => {
    setProductsFavorites([
      ...productsFavorites.filter((card) => card.sku !== id),
    ]);
    localStorage.setItem(
      "favorites",
      JSON.stringify([...productsFavorites.filter((card) => card.sku !== id)])
    );
  };

  const openModal = (id) => {
    setModalShow(true);
    const newCard = items.filter((card) => card.sku === id);
    const [{ ...addToCard }] = newCard;
    setIcurrentId(addToCard.sku);
  };

  const openDeleteModal = (id) => {
    setModalShowCart(true);
    const newCard = items.filter((card) => card.sku === id);
    const [{ ...addToCard }] = newCard;
    setIcurrentId(addToCard.sku);
  };

  const modalClose = () => {
    setModalShow(false);
  };
  const modalCloseCart = () => {
    setModalShowCart(false);
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
          header={"Adding to cart"}
          closeButton={true}
          text={"The item has been successfully added to the cart"}
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

export default App;
