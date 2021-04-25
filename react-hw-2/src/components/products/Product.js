import React from "react";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../button/Button";

class Product extends React.Component {
  state = {
    favIconActive: false,
    iconColor: "",
    favorite: JSON.parse(localStorage.getItem("Favorites")) || [],
  };

  addToCart = () => {
    this.props.onClick();
    localStorage.setItem("Cart", this.props.card.sku);
  };

  addToFavorite = (id) => {
    if (!this.state.favorite.includes(id)) {
      this.setState({
        favorite: this.state.favorite.concat(id),
        iconColor: "orange",
      });
    } else {
      let index = this.state.favorite.indexOf(id);
      let temp = [
        ...this.state.favorite.slice(0, index),
        ...this.state.favorite.slice(index + 1),
      ];
      this.setState({ favorite: temp, iconColor: "black" });
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
        <span className={styles.fav} onClick={() => this.addToFavorite(sku)}>
          <FontAwesomeIcon icon={faStar} color={this.state.iconColor} />
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
