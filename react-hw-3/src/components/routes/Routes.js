import React from "react";
import ProductList from "../products/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import Favorites from "../../pages/favorites/Favorites";
import NavBar from "../navbar/Navbar";
import PropTypes from "prop-types";

const Routes = (props) => {
  const {
    items,
    productsCart,
    productsFavorites,
    onClick,
    deleteProduct,
    addToFavorites,
    deleteFavorites,
    main,
  } = props;

  return (
    <>
      <Router>
        <NavBar />
        <main className={main}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <ProductList
                  items={items}
                  productsFavorites={productsFavorites}
                  onClick={onClick}
                  addToFavorites={addToFavorites}
                  deleteFavorites={deleteFavorites}
                  productsCart={productsCart}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              render={(props) => (
                <Cart items={productsCart} deleteProduct={deleteProduct} />
              )}
            />
            <Route
              exact
              path="/fav"
              render={(props) => (
                <Favorites
                  items={productsFavorites}
                  deleteFavorites={deleteFavorites}
                  onClick={onClick}
                />
              )}
            />
          </Switch>
        </main>
      </Router>
    </>
  );
};
Routes.propTypes = {
  onClick: PropTypes.func,
  deleteProduct: PropTypes.func,
  addToFavorites: PropTypes.func,
  deleteFavorites: PropTypes.func,
  productsFavorites: PropTypes.array,
  productsCart: PropTypes.array,
  items: PropTypes.array,
};

export default Routes;
