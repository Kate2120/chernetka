import styles from "./Menu.module.scss";
import {useTranslation} from "react-i18next";
import {Path} from "../../constants/path/path";
import {Link, useLocation} from "react-router-dom";
import i18next, {changeLanguage} from "i18next";
import {useEffect, useState} from "react";

export default function Menu() {
    let location = useLocation();
    console.log(location.pathname)
    useEffect(
        () => {
        }, [localStorage]);
    const {t} = useTranslation();

    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <Link to={Path.HOME} className={location.pathname === Path.HOME ? styles.activeItem : styles.linkMenu}>{t("users")}</Link>
                    </li>
                    <li>
                        <Link to={Path.USER_INFO_EMPTY}
                              className={location.pathname.includes('user')? styles.activeItem : styles.linkMenu} onClick={() => {}}>{t("user_info")}</Link>
                    </li>
                </ul>
                <div className={styles.langBlock}>

                    <div onClick={() => changeLanguage("ru")} className={i18next.language === 'ru' ? styles.active : styles.lang} id='ru'>
                        <img src="./ru.png"/>
                    </div>
                <div onClick={() => changeLanguage("en")} className={i18next.language === 'en' ? styles.active : styles.lang} id='en'>
                        <img src="./en.png"/>
                    </div>

                </div>


            </div>
        </div>
    );
}
