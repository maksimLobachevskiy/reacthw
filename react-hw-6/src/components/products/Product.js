import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import FavIcon from "../favicon/Favicon";
import Button from "../button/Button";
import { connect } from "react-redux";

const Product = (props) => {
  const {
    card: { name, price, imgUrl, sku, color },
    onClick,
    deleteProduct,
    addToFavorites,
    deleteFavorites,
    productsFavorites,
    productsCart,
    showFavIcon,
    showBuyBtn,
    showDelBtn,
  } = props;

  const [disabled, setDisabled] = useState(null);

  useEffect(() => {
    if (productsCart.find((card) => card.sku === sku)) {
      setDisabled("disabled");
    }
  }, [productsCart, sku]);

  const onBtnClick = () => {
    onClick(sku);
  };

  const deleteItem = () => {
    deleteProduct(sku);
  };

  return (
    <li className={styles.product}>
      <h3>{name}</h3>
      <div className={styles.imgContainer}>
        <img src={imgUrl} width="150" height="auto" alt="laptop" />
      </div>
      <span className={styles.color}>Color: {color}</span>
      <span className={styles.price}>Price: {price} $</span>
      <span>SKU: {sku}</span>
      {showFavIcon && (
        <FavIcon
          sku={sku}
          name={name}
          addToFavorites={addToFavorites}
          deleteFavorites={deleteFavorites}
          productsFavorites={productsFavorites}
        />
      )}

      {showBuyBtn && (
        <Button
          onClick={onBtnClick}
          color={disabled ? "grey" : "black"}
          text={disabled ? "ADDED" : "Add to cart"}
          hoverColor={disabled ? "grey" : "#f14b31"}
          disabled={disabled}
        />
      )}

      {showDelBtn && (
        <Button
          onClick={deleteItem}
          color="black"
          text="Remove from cart"
          hoverColor="#f14b31"
        />
      )}
    </li>
  );
};

Product.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    sku: PropTypes.number,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }),
  deleteProduct: PropTypes.func,
  addToFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  productsFavorites: PropTypes.array,
};

const mapStoreToProps = ({ productsCart }) => {
  return {
    productsCart,
  };
};
export default connect(mapStoreToProps)(Product);
