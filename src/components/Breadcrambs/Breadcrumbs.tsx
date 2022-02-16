import {PropsBreadcrumbs} from "./interfacies";
import styles from './Breadcrunbs.module.scss'
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Breadcrumbs(props: PropsBreadcrumbs) {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage['users']) : [];
    const {t} = useTranslation();
    let doubleAngle = " >>   ";
    let id = useParams();
    return (
        <div className={styles.breadcrumbs}>
            <ul>
                <li>
                    <Link to={props.home}>{t("home")}</Link>
                </li>
                {doubleAngle}
                <li>
                    <Link to={props.category}>{t(`${props.categoryName}`)}</Link>
                </li>
                <li>
                    {id.id ? `- ${users[Number(props.id)].name.first} ${users[Number(props.id)].name.last}` : ''}
                </li>
            </ul>
        </div>
    )
}