import React, { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Favicon.module.scss";
import PropTypes from "prop-types";

const FavIcon = (props) => {
  const [isIconActive, setIconActive] = useState(false);
  const { sku, addToFavorites, deleteFavorites, productsFavorites } = props;

  useEffect(() => {
    if (productsFavorites.find((card) => card.sku === sku)) {
      setIconActive(true);
    }
  }, [productsFavorites]);

  const iconActive = () => {
    if (!isIconActive) {
      addToFavorites(sku);
      setIconActive(true);
    } else {
      deleteFavorites(sku);
      setIconActive(false);
    }
  };

  return (
    <>
      <span className={styles.fav} onClick={iconActive}>
        <FontAwesomeIcon
          icon={faStar}
          color={isIconActive ? "#f14b31" : "black"}
        />
      </span>
    </>
  );
};

FavIcon.propTypes = {
  sku: PropTypes.number,
  addToFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  productsFavorites: PropTypes.array,
  page: PropTypes.string,
};

export default FavIcon;
