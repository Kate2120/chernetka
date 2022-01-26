import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAuth, getUsers} from "../../Redux/selectors";
import UserCardPreview from "./UserCardPreview";
import styles from "./Users.module.scss";
import { fetchUsersRequest } from "../../Redux/Actions/actions";

export default function Users() {
  const dispatch = useDispatch();
    let auth = useSelector(getAuth);
    console.log(auth);
  let users = useSelector(getUsers);
  console.log(users);
  useEffect(() => {
      if(users.length === 0){
    dispatch(fetchUsersRequest());
      }
  }, [dispatch]);
  let background = "";
  return (
    <div className={styles.h1}>
      <h1>Наши клиенты</h1>
      <div className={styles.container}>
        {users.map((user, index) => (
          <div>
            <UserCardPreview
              image={user.picture}
              name={user.name}
              birth={user.dob}
              background={background}
              gender={user.gender}
              id = {index.toString()}
              user={user}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
