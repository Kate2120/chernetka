import styles from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
interface Props {
    name: string,
    form: any,
    value: string,
}

function Input(props: Props) {
    const {t} = useTranslation();
    return (
        <label htmlFor={`${props.name}`}>
            {t(`${props.name}`)}
            <input
                className={styles.input}
                placeholder={t(`${props.name}`)}
                type='text'
                name={`${props.name}`}
                onChange={props.form.handleChange}
                onBlur={props.form.handleBlur}
                value={props.form.value}
            />
        </label>
    )
}

export default Input;