import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Api/api";
import UserCard from "./UserCard";
import styles from "./Users.module.scss";
import {fetchUsersRequest} from '../../Redux/Actions/actions';
export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(getUsers);
    useEffect(() => {
        dispatch(fetchUsersRequest());
    }), [dispatch];
  return (
    <div className={styles.container}>
        <h1>Наши клиенты</h1>
      <UserCard />
    </div>
  );
}
