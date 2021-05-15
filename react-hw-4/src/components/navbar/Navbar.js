import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          <li className={styles.menuItem}>
            <NavLink to="/" className={styles.menuLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/cart"
              activeClassName={styles.active}
              className={styles.menuLink}
            >
              Cart
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/fav"
              activeClassName={styles.active}
              className={styles.menuLink}
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
