import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.scss";
import PropTypes from "prop-types";

const ProductList = (props) => {
  const {
    items,
    onClick,
    page,
    addToFavorites,
    deleteFavorites,
    productsFavorites,
  } = props;
  const cards = items.map((item) => (
    <Product
      card={item}
      key={item.sku}
      onClick={onClick}
      addToFavorites={addToFavorites}
      deleteFavorites={deleteFavorites}
      productsFavorites={productsFavorites}
      page={page}
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
  page: PropTypes.string,
};

export default ProductList;
