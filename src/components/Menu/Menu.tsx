import styles from "./Menu.module.scss";
import {useTranslation} from "react-i18next";
import {Path} from "../../constants/path/path";
import {Link} from "react-router-dom";
import {changeLanguage} from "i18next";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;



export default function Menu() {
    /*useEffect(() => {
        changeLanguage("ru");
    }, []);
    let blockRu = document.querySelector("#ru");
    let blockEn = document.querySelector("#en");
    let activeRU = () => {
        if (blockRu && blockEn) {
            blockRu.className = styles.active;
            blockEn.className = styles.lang;
        }
    }
    let activeEn = () => {
        if (blockRu && blockEn) {
            blockRu.className = styles.lang;
            blockEn.className = styles.active;
        }
    }

    if (blockRu && blockEn) {
        blockRu.addEventListener("click", activeRU);
        blockEn.addEventListener("click", activeEn);
    }*/
let [color, setColor] =  useState(styles.linkMenu);
    let url = window.location.href;
    let currentUrl = url.replace('http://localhost:3000', '')
let changeActiveColor = () => {


    setColor
}
    const {t} = useTranslation();

    console.log(Path.USER_INFO_EMPTY)
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <ul>
                    <li><Link to={Path.HOME}
                              className={currentUrl === Path.HOME ? styles.activeItem : styles.linkMenu} onClick={() => changeActiveColor()}>{t("users")}</Link>
                    </li>
                    <li><Link to={Path.USER_INFO_EMPTY}
                              className={currentUrl.includes('/user') ? styles.activeItem : styles.linkMenu}>{t("user_info")}</Link>
                    </li>
                </ul>
                <div className={styles.langBlock}>

                    <div onClick={() => changeLanguage("ru")} className={styles.current} id='ru'>
                        <img src="./ru.png"/>
                    </div>


                    <div onClick={() => changeLanguage("en")} className={styles.lang} id='en'>
                        <img src="./en.png"/>
                    </div>

                </div>


            </div>
        </div>
    );
}
