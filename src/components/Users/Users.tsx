import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Redux/usersReducer/selectors";
import UserCardPreview from "./UserCardPreview";
import styles from "./Users.module.scss";
import {fetchUsersRequest} from "../../Redux/usersReducer/actions";
import {useTranslation} from "react-i18next";
import {useInView} from 'react-intersection-observer';

export default function Users() {
    const dispatch = useDispatch();
    let users = useSelector(getUsers);
    let [currentPage, setPage] = useState(1);
    const [ref, inView] = useInView({
        rootMargin: '200px 0px',
    });
    const {t} = useTranslation();
    useEffect(() => {
        if (inView && users.length < 19) {
            dispatch(fetchUsersRequest(currentPage));
            setPage(currentPage => currentPage + 1);

        }
    }, [inView]);
    let background = "";
    return (
        <div className={styles.h1}>
            <h1>{t("our_users")}</h1>
            <div className={styles.container}>
                {users.map((user, index) => (
                    <div>
                        <UserCardPreview
                            image={user.picture}
                            name={user.name}
                            birth={user.dob}
                            background={background}
                            gender={user.gender}
                            id={index.toString()}
                            user={user}
                        />
                    </div>
                ))}
            </div>
            <div ref={ref}></div>
        </div>
    );
}
