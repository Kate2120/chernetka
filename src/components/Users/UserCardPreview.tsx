import styles from "./Users.module.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {PropsUserCardPreview} from "./interfacies";

export default function UserCardPreview(props: PropsUserCardPreview) {
    const {t} = useTranslation();
    return (
        <div className={styles[`${props.gender}`]}>

            <div className={styles.picture}>
                <Link to={`/user/${props.id}`}>
                    <img src={props.image.large} alt={`${props.name.first} ${props.name.last}`}
                         title={`${props.name.first} ${props.name.last}`}/>
                </Link>
            </div>
            <div className={styles.preview_info}>
                {`${props.name.first} ${props.name.last}`}
            </div>
            <div className={styles.preview_info}>
                {props.birth.date.split("T")[0]}
            </div>
            <div className={styles.preview_info}>
                {`${props.birth.age} years old`}
            </div>
            <div className={styles.button} id={props.id}>
                <Link to={`/user/${props.id}`}>{t("more")}</Link>
            </div>

        </div>
    );
}
