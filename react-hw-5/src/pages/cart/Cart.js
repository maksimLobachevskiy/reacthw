import React from "react";
import Product from "../../components/products/Product";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CheckoutForm from "../../components/checkout/CheckoutForm";

const useStyles = createUseStyles({
  producList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
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
  if (productsCart.length !== 0) {
    return (
      <>
        <ul className={styles.producList}>{cards}</ul>
        <CheckoutForm />
      </>
    );
  } else {
    return <h2>No products added to the Cart</h2>;
  }
};

Cart.propTypes = {
  deleteProduct: PropTypes.func,
  items: PropTypes.array
};

const mapStoreToProps = ({ productsCart }) => {
  return {
    productsCart
  };
};
export default connect(mapStoreToProps)(Cart);
