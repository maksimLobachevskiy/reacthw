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

const Favorites = (props) => {
  const { items, onClick, deleteFavorites } = props;
  const styles = useStyles();

  const cards = items.map((item) => (
    <Product
      card={item}
      onClick={onClick}
      key={item.sku}
      deleteFavorites={deleteFavorites}
      productsFavorites={items}
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

export default Favorites;
