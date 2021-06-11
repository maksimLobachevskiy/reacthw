import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProductList = (props) => {
  const {
    items,
    onClick,
    addToFavorites,
    deleteFavorites,
    productsFavorites,
    productsCart,
  } = props;
  const cards = items.map((item) => (
    <Product
      card={item}
      key={item.sku}
      onClick={onClick}
      addToFavorites={addToFavorites}
      deleteFavorites={deleteFavorites}
      productsFavorites={productsFavorites}
      productsCart={productsCart}
      showFavIcon={true}
      showBuyBtn={true}
    />
  ));
  return <ul className={styles.producList}>{cards}</ul>;
};

ProductList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  cards: PropTypes.array,
  addToFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  productsFavorites: PropTypes.array,
};

const mapStoreToProps = ({ items }) => {
  return {
    items,
  };
};

export default connect(mapStoreToProps)(ProductList);
