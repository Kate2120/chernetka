import styles from "./Users.module.scss";
import { Picture, UserName, DateBirth } from "../../Redux/Actions/interfacies";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/selectors";
import { fetchUsersRequest } from "../../Redux/Actions/actions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
interface Props {
  image: Picture;
  name: UserName;
  birth: DateBirth;
  background: string;
  gender: string;
  id: string;
}

function UserCard() {
  const id = useParams();
  let users = useSelector(getUsers);
  let currentUser = users[Number(id.id)];
  const [currentId, setCount] = useState(Number(id.id));
  console.log(currentUser);
  console.log(id.id);
  return (
    <div className={styles.infoblock}>
      <div className={styles[`${currentUser.gender}`]}>
        <div className={styles.rowInfo}>
          <div className={styles.image}>
            <img src={currentUser.picture.large} />
          </div>
          <div className={styles.info}>
            <h2>{currentUser.name.first + " " + currentUser.name.last}</h2>

            <p>
              <span>Дата рождения: </span>
              {currentUser.dob.date.split("T")[0]}
            </p>
            <p>
              <span>Возраст: </span>
              {currentUser.dob.age}
            </p>
            <p>
              <span>Пол: </span>
              {currentUser.gender}
            </p>
            <p>
              <span>Адрес: </span>
              {currentUser.location.state + ", " + currentUser.location.city}
            </p>
            <p>
              <span>Телефон: </span>
              {currentUser.phone}
            </p>
            <p>
              <span>Зарегистрирован: </span>
              {currentUser.registered.date.split("T")[0]}
            </p>
          </div>
        </div>
        <div className={styles.rowButton}>
          <div className={styles.button}>
              <p>Предыдущий</p>
              </div>
          <div className={styles.button} onClick={() => setCount(currentId + 1)}>
              <p>Следующий</p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
