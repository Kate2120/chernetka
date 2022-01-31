import styles from "./Menu.module.scss";
import React from "react";
import {useTranslation} from "react-i18next";
import {Path} from "../../constants/path/path";
import {Link, NavLink, useLocation} from "react-router-dom";
import i18next, {changeLanguage} from "i18next";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchLogout} from "../../Redux/Actions/actions";
import {PathImg} from "../../constants/path/parh-images";


export default function Menu() {
    const dispatch = useDispatch();
    let location = useLocation();
    let handlerLogout = () => {
        dispatch(fetchLogout());
    }
    useEffect(
        () => {
        }, [localStorage]);
    const {t} = useTranslation();

    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <NavLink to={Path.HOME}
                              >{t("users")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={Path.USER_INFO_EMPTY}
                        >{t("user_info")}</NavLink>
                    </li>
                </ul>
                <div className={styles.langBlock}>

                    <div onClick={() => changeLanguage("ru")}
                         className={i18next.language === 'ru' ? styles.active : styles.lang} id='ru'>
                        <img src={PathImg.FLAG_RU} alt={t("russian")} title={t("russian")}/>
                    </div>
                    <div onClick={() => changeLanguage("en")}
                         className={i18next.language === 'en' ? styles.active : styles.lang} id='en'>
                        <img src={PathImg.FLAG_EN} alt={t("english")} title={t("english")}/>
                    </div>
                    <div className={styles.logout} onClick={handlerLogout}>
                        <Link to={Path.LOGIN}>
                            <img src={PathImg.LOGOUT} alt={t("logout")} title={t("logout")}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
