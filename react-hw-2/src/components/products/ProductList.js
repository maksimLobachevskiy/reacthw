import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.scss";
import PropTypes from "prop-types";

class ProductList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    const cards = items.map((item) => (
      <Product card={item} key={item.sku} onClick={onClick} />
    ));
    return <ul className={styles.producList}>{cards}</ul>;
  }
}

ProductList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  cards: PropTypes.array,
};

export default ProductList;
