import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import {useSelector} from "react-redux";
import {getIsLogged} from "../../Redux/selectors";

export default function LoginPage() {
    let auth = useSelector(getIsLogged);
    console.log(auth);
  return (
    <div className={styles.body}>
      <div className={styles.loginWindow}>
        <LoginForm />
      </div>
    </div>
  );
}
