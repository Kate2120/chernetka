import styles from "./Users.module.scss";
import { Picture, UserName, DateBirth } from "../../Redux/Actions/interfacies";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/selectors";
import { fetchUsersRequest } from "../../Redux/Actions/actions";
import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from "react";
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
  let currentId = Number(id.id);
  if(currentId === undefined){
    currentId = 15;
  }
  let users = useSelector(getUsers);

  if(currentId === 0){
    currentId = 1;
  } else if(currentId === 19){
    currentId = 18;
  }
  let currentUser = users[Number(id.id)];
  let next = users[Number(id.id) + 1];

  console.log(currentUser);
  console.log(id.id);
  return (
    <div className={styles.infoBlock}>
      <div className={styles.h2}>
      <h2>Подробная информация о пользователе</h2>
      </div>
      <div className={styles[`${users[currentId].gender}`]}>
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
          <Link to={`/user/${currentId - 1}`}><div className={styles.button}>
            Предыдущий
              </div></Link>
          <Link to={`/user/${currentId + 1}`}><div className={styles.button} >
            Следующий
              </div></Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
