import styles from './LoginForm.module.scss';
function LoginForm(){
    return (
        <>
        <form>
                <label>
                    Для входа в админ панель введите пароль
                <input className={styles.input}/>
                </label>
                <button>Войти</button>
            </form>
        </>
    )
}
export default LoginForm;