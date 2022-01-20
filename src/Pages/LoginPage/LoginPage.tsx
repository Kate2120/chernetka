import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
export default function LoginPage() {
  return (
    <body className={styles.body}>
      <div className={styles.loginWindow}>
        <LoginForm />
      </div>
    </body>
  );
}
