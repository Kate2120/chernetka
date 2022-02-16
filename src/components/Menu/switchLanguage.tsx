import styles from "./Menu.module.scss";
import i18next from "i18next";
import {PathImg} from "../../constants/path/parh-images";
import React from "react";
import {useTranslation} from "react-i18next";
import {handleLogoutChangeLanguage} from "./hendlers";

function SwitchLanguage(){
    const {t} = useTranslation();
    return(
        <>
            <div onClick={handleLogoutChangeLanguage}
                 className={i18next.language === 'ru' ? styles.selected : styles.lang}>
                <img src={PathImg.FLAG_RU} alt={t("russian")} title={t("russian")} id='ru'/>
            </div>
            <div onClick={handleLogoutChangeLanguage}
                 className={i18next.language === 'en' ? styles.selected : styles.lang}>
                <img src={PathImg.FLAG_EN} alt={t("english")} title={t("english")}  id='en'/>
            </div>
        </>

    )
}
export default SwitchLanguage;