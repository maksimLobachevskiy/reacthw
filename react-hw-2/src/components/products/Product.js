import React from "react";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../button/Button";

class Product extends React.Component {
  state = {
    favIconActive: false,
    iconColor: "black",
    favProducts: [],
  };

  addToCart = () => {
    this.props.onClick();
    localStorage.setItem(this.props.card.name, this.props.card.sku);
  };

  addToFavourites = () => {
    if (this.state.favIconActive) {
      this.setState({ favIconActive: false });
      localStorage.removeItem(this.props.card.sku, this.props.card.sku);
    } else {
      this.setState({ favIconActive: true });
      localStorage.setItem(this.props.card.sku, this.props.card.sku);
    }
  };

  render() {
    const {
      card: { name, price, imgUrl, sku, color },
    } = this.props;
    return (
      <li className={styles.product}>
        <h3>{name}</h3>
        <div className={styles.imgContainer}>
          <img src={imgUrl} width="200" height="auto" alt="laptop" />
        </div>
        <span className={styles.color}>Color: {color}</span>
        <span className={styles.price}>Price: {price} $</span>
        <span className={styles.fav} onClick={this.addToFavourites}>
          <FontAwesomeIcon
            icon={faStar}
            color={localStorage.getItem(JSON.parse(sku)) ? "orange" : "black"}
          />
        </span>
        <span>SKU: {sku}</span>
        <Button text="Add to cart" color={"black"} onClick={this.addToCart} />
      </li>
    );
  }
}

Product.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    sku: PropTypes.number,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default Product;
