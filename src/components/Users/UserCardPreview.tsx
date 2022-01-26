import styles from "./Users.module.scss";
import {
  User,
  Picture,
  UserName,
  DateBirth,
  Registered,
  Location,
} from "../../Redux/Actions/interfacies";
import { Link } from "react-router-dom";
import { Path } from "../../constants/path/path";
import { useState } from "react";

interface Props {
  image: Picture;
  name: UserName;
  birth: DateBirth;
  background: string;
  gender: string;
  id: string;

  user: User;
}
export default function UserCard(props: Props) {
  return (
    <div className={styles[`${props.gender}`]}>
      <div className={styles.picture}>
        <img src={props.image.large} />
      </div>
      <div className={styles.preview_info}>
        {props.name.first + " " + props.name.last}
      </div>
      <div className={styles.preview_info}>
        {props.birth.date.split("T")[0]}
      </div>
      <div className={styles.preview_info}>
        {props.birth.age + " years old"}
      </div>
      <div className={styles.button} id={props.id}>
        <Link to={`/user/${props.id}`}>Подробнее</Link>
      </div>
    </div>
  );
}
