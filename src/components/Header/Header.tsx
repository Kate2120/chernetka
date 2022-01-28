import React, {useState} from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Path} from "../../constants/path/path";
import MobileMenu from "../Menu/MobileMenu";
import {PathImg} from "../../constants/path/parh-images";

function Header() {
    let [menuActive, setMenuActive] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.burger} onClick={() => setMenuActive(!menuActive)}>
              <img src={PathImg.BURGER}/>
          </div>
          <div className={styles.logo}>
              <Link to={Path.HOME}><img src={PathImg.LOGO}/></Link>
          </div>
      </div>
      <Menu/>
        <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
    </div>
  );
}
export default Header;
