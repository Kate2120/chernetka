import styles from './Stub.module.scss';
import * as React from 'react';
import {useState} from "react";
import UsersList from "../Users/UsersList";
import {useTranslation} from "react-i18next";

function Stub() {
    let [viewItems, setViewItems] = useState(false)
    const {t} = useTranslation();
    return (
        <div className={styles.container}>
            <h1>{t("about_user")}</h1>
            <div className={styles.info}>
                <div className={styles.list}>
                    <h2>{t("choose_user")}</h2>
                    <div className={styles.rowChoose}>
                        <div className={styles.choose}>{t("make_choice")}</div>
                        <div className={styles.button}
                             onClick={() => setViewItems(!viewItems)}>{viewItems ? t("collapse") : t("select")}</div>
                    </div>
                    {viewItems ? <UsersList/> : ''}
                </div>
            </div>
        </div>
    )
}

export default Stub;