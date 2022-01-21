import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Redux/selectors";
import UserCard from "./UserCard";
import styles from "./Users.module.scss";
import {fetchUsersRequest} from '../../Redux/Actions/actions';

export default function Users() {
    const dispatch = useDispatch();
    let users = useSelector(getUsers);
    console.log(users);
    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <div className={styles.h1}>
            <h1>Наши клиенты</h1>
        <div className={styles.container}>


            {users.map(user => (
                <div>
                    <UserCard image={user.picture}/>
                </div>
            ))}
        </div>
        </div>
    );
}
