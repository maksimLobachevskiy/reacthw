import React from "react";
import Product from "../../components/products/Product";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = createUseStyles({
  producList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

const Cart = (props) => {
  const styles = useStyles();
  const { productsCart, deleteProduct } = props;

  const cards = productsCart.map((item) => (
    <Product
      card={item}
      key={item.sku}
      deleteProduct={deleteProduct}
      productsCart={productsCart}
      showFavIcon={false}
      showDelBtn={true}
    />
  ));
  return <ul className={styles.producList}>{cards}</ul>;
};

Cart.propTypes = {
  deleteProduct: PropTypes.func,
  items: PropTypes.array,
};

const mapStoreToProps = ({ productsCart }) => {
  return {
    productsCart,
  };
};
export default connect(mapStoreToProps)(Cart);
