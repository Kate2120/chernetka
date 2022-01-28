import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Redux/selectors";
import UserCardPreview from "./UserCardPreview";
import styles from "./Users.module.scss";
import {fetchUsersRequest} from "../../Redux/Actions/actions";
import {useTranslation} from "react-i18next";

export default function Users() {
    const dispatch = useDispatch();
    let users = useSelector(getUsers);
    let [currentPage, setPage] = useState(1);
    let [fetching, setFetching] = useState(true);
    const {t} = useTranslation();
    useEffect(() => {
        if (fetching) {
            if (users.length < 19) {
                dispatch(fetchUsersRequest(currentPage));
                setFetching(false);
            }

        }
    }, [fetching]);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);
    let scrollHandler = (event: Event) => {
        if (event.target !== null) {
            if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 130 && users.length < 19) {
                setFetching(true);
                setPage(prevState => prevState + 1);
            }
        }
    };
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
        </div>
    );
}
