import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <Menu/>
    </div>
  );
}
export default Header;
