import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">e-Commerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <Link to="/login">
          <Button colorScheme="pink">Login</Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="pink">Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
