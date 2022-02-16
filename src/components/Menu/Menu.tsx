import styles from "./Menu.module.scss";
import React from "react";
import {useTranslation} from "react-i18next";
import {Path} from "../../constants/path/path";
import {NavLink} from "react-router-dom";
import SwitchLanguage from "./switchLanguage";
import Logout from "./logout";

export default function Menu() {
    const {t} = useTranslation();
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <NavLink to={Path.HOME}
                                 className={({isActive}) => (isActive ? styles.active : styles.inactive)}
                        >{t("users")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={Path.USER_INFO_EMPTY}
                                 className={({isActive}) => (isActive ? styles.active : styles.inactive)}
                        >{t("user_info")}</NavLink>
                    </li>
                </ul>
                <div className={styles.switches}>
                <SwitchLanguage/>
                <Logout/>
                </div>
            </div>
        </div>
    );
}
