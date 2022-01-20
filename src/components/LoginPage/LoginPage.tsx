import React from "react";
import styles from './LoginPage.module.scss';
export default function LoginPage() {
    return (
        <body className={styles.body}>
        <div className={styles.loginWindow}>
            <form>
                <label>
                    Для входа в админ панель введите пароль
                <input className={styles.input}/>
                </label>
                <button>Войти</button>
            </form>

        </div>
        </body>
    )
}