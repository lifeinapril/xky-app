import React from "react";

import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <Navlink onClick={props.onShowMenu}>
        <i class="ri-function-line"></i>
      </Navlink>
      <Logo />
      <Navlink onClick={props.onShowCart}>
        <i class="ri-shopping-bag-line"></i>
      </Navlink>
    </nav>
  );
};

export default Navbar;
