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
  const { items, onClick, page, deleteFavorites } = props;
  const styles = useStyles(props);

  const cards = items.map((item) => (
    <Product
      card={item}
      onClick={onClick}
      key={item.sku}
      page={page}
      deleteFavorites={deleteFavorites}
      productsFavorites={items}
    />
  ));
  return <ul className={styles.producList}>{cards}</ul>;
};
Favorites.propTypes = {
  deleteFavorites: PropTypes.func,
  items: PropTypes.array,
  page: PropTypes.string,
};

export default Favorites;
