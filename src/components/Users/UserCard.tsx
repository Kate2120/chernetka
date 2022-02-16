import styles from "./Users.module.scss";
import {useSelector} from "react-redux";
import {getUsers} from "../../Redux/selectors";
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {PathImg} from "../../constants/path/parh-images";

function UserCard() {
    const id = useParams();
    let currentId = Number(id.id);
    let users = useSelector(getUsers);
    let currentUser = users[Number(id.id)];
    const {t} = useTranslation();
    return (
        <div className={styles.infoBlock}>
            <div className={styles.h1}>
                <h1>{t("about_user")}</h1>
            </div>
            <div className={styles[`${users[currentId].gender}`]}>
                <div className={styles.rowInfo}>
                    <div className={styles.image}>
                        <img src={currentUser.picture.large} alt={`${currentUser.name.first} ${currentUser.name.last}`} title={`${currentUser.name.first} ${currentUser.name.last}`}/>
                    </div>
                    <div className={styles.info}>
                        <h2>{`${currentUser.name.first} ${currentUser.name.last}`}</h2>
                        <p>
                            <span>{t("date_of_birth")}: </span>
                            {currentUser.dob.date.split("T")[0]}
                        </p>
                        <p>
                            <span>{t("age")}: </span>
                            {currentUser.dob.age}
                        </p>
                        <p>
                            <span>{t("gender")}: </span>
                            {currentUser.gender}
                        </p>
                        <p>
                            <span>{t("address")}: </span>
                            {`${currentUser.location.state}, ${currentUser.location.city}`}
                        </p>
                        <p>
                            <span>{t("phone")}: </span>
                            {currentUser.phone}
                        </p>
                        <p>
                            <span>{t("registration_date")}: </span>
                            {currentUser.registered.date.split("T")[0]}
                        </p>
                    </div>
                </div>
                <div className={styles.rowButton}>
                    <Link to={currentId > 0 ? `/user/${currentId - 1}` : ''}>
                        <div className={currentId > 0 ? styles.button : styles.inactive}>
                            <p>  {t("previous")}</p>
                            <img src={PathImg.ARROW_LEFT}/>
                        </div>
                    </Link>
                    <Link to={currentId < users.length - 1 ? `/user/${currentId + 1}` : ''}>
                        <div className={currentId < users.length - 1 ? styles.button : styles.inactive}>
                           <p> {t("next")}</p>
                            <img src={PathImg.ARROW_RIGHT}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
