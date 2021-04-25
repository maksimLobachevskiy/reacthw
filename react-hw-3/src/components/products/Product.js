import React from "react";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import FavIcon from "../favicon/Favicon";
import Button from "../button/Button";

const Product = (props) => {
  const {
    card: { name, price, imgUrl, sku, color },
    onClick,
    page,
    deleteProduct,
    addToFavorites,
    deleteFavorites,
    productsFavorites,
  } = props;

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
      {page === "/" && (
        <FavIcon
          sku={sku}
          name={name}
          addToFavorites={addToFavorites}
          deleteFavorites={deleteFavorites}
          page={page}
          productsFavorites={productsFavorites}
        />
      )}
      {page === "/fav" && (
        <FavIcon
          sku={sku}
          name={name}
          addToFavorites={addToFavorites}
          deleteFavorites={deleteFavorites}
          page={page}
          productsFavorites={productsFavorites}
        />
      )}
      {page === "/fav" && (
        <Button
          onClick={onBtnClick}
          color="black"
          text="Add to cart"
          hoverColor="#f14b31"
        />
      )}

      {page === "/" && (
        <Button
          onClick={onBtnClick}
          color="black"
          text="Add to cart"
          hoverColor="#f14b31"
        />
      )}
      {page === "/cart" && (
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
  page: PropTypes.string,
};

export default Product;
