import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { isUserLoggedIn, user } = useAuth();
  const { items } = useCart();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">e-Commerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {!isUserLoggedIn && (
          <>
            <Link to="/login">
              <Button colorScheme="pink">Login</Button>
            </Link>
            <Link to="/register">
              <Button colorScheme="pink">Register</Button>
            </Link>
          </>
        )}
        {isUserLoggedIn && (
          <>
            {user?.role === "admin" && (
              <Link to="/admin">
                <Button colorScheme={"pink"} variant="ghost">
                  Admin
                </Button>
              </Link>
            )}
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
            {items.length > 0 && (
              <Link to="/cart">
                <Button colorScheme="pink" variant="outline">
                  Cart ({items.length})
                </Button>
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
