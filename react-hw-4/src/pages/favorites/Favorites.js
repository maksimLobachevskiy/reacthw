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

const Favorites = (props) => {
  const { productsFavorites, onClick, deleteFavorites } = props;
  const styles = useStyles();

  const cards = productsFavorites.map((item) => (
    <Product
      card={item}
      onClick={onClick}
      key={item.sku}
      deleteFavorites={deleteFavorites}
      productsFavorites={productsFavorites}
      showFavIcon={true}
      showBuyBtn={true}
    />
  ));
  return <ul className={styles.producList}>{cards}</ul>;
};
Favorites.propTypes = {
  deleteFavorites: PropTypes.func,
  items: PropTypes.array,
};

const mapStoreToProps = ({ productsFavorites }) => {
  return {
    productsFavorites,
  };
};
export default connect(mapStoreToProps)(Favorites);
