import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { isUserLoggedIn } = useAuth();

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
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
