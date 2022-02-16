import styles from "./Menu.module.scss";
import i18next, {changeLanguage} from "i18next";
import {PathImg} from "../../constants/path/parh-images";
import React from "react";
import {useTranslation} from "react-i18next";

function SwitchLanguage(){
    const {t} = useTranslation();
    return(
        <>
            <div onClick={() => changeLanguage("ru")}
                 className={i18next.language === 'ru' ? styles.selected : styles.lang} id='ru'>
                <img src={PathImg.FLAG_RU} alt={t("russian")} title={t("russian")}/>
            </div>
            <div onClick={() => changeLanguage("en")}
                 className={i18next.language === 'en' ? styles.selected : styles.lang} id='en'>
                <img src={PathImg.FLAG_EN} alt={t("english")} title={t("english")}/>
            </div>
        </>

    )
}
export default SwitchLanguage;