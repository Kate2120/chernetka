import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Path} from "../../constants/path/path";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.logo}>
              <Link to={Path.HOME}><img src="./logo.png"/></Link>
          </div>
      </div>
      <Menu/>
    </div>
  );
}
export default Header;
