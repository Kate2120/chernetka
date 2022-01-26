import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
export default function LoginPage() {
    let header = document.querySelector('.Header_header__gMdec')
    console.log(header)
  return (
    <body className={styles.body}>
      <div className={styles.loginWindow}>
        <LoginForm />
      </div>
    </body>
  );
}
