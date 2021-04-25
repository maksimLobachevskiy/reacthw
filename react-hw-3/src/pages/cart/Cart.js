import React from "react";
import Product from "../../components/products/Product";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  producList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

const Cart = (props) => {
  const styles = useStyles(props);
  const { items, page, deleteProduct } = props;

  const cards = items.map((item) => (
    <Product
      card={item}
      key={item.sku}
      page={page}
      deleteProduct={deleteProduct}
    />
  ));
  return <ul className={styles.producList}>{cards}</ul>;
};

Cart.propTypes = {
  deleteProduct: PropTypes.func,
  items: PropTypes.array,
  page: PropTypes.string,
};

export default Cart;
