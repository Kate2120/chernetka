import styles from './LoginForm.module.scss';
import * as yup from 'yup';
import {authorisationRequest} from "../../Redux/Actions/actions";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from 'formik';


function LoginForm() {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const validationSchema = yup.object().shape({
        firstName: yup.string().typeError(t("name_required")).required(t("must_be_string")),
        password: yup.string().typeError(t("must_be_string")).required(t("password_required")),
        confirmPassword: yup.string().oneOf([yup.ref('password')], t("password_mismatch")).required(t("confirmation_required")),
    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: values => {
            dispatch(authorisationRequest(values))
        },
    });
    return (
        <>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <p>{t("login_to_admin")}</p>
                <label htmlFor={'name'}>
                    {t("name")}
                    <input className={styles.input} placeholder={t("name")} type='text' name={'firstName'}
                           id="firstName"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.firstName}/>
                </label>
                {formik.touched.firstName && formik.errors.firstName &&
                <p className={styles.error}>{formik.errors.firstName}</p>}
                <label htmlFor={'password'}>
                    {t("password")}
                    <input className={styles.input} placeholder={t("password")} type='password'
                           name={'password'}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.password}/>
                </label>
                {formik.touched.password && formik.errors.password &&
                <p className={styles.error}>{formik.errors.password}</p>}
                <label htmlFor={'confirmPassword'}>
                    {t("confirm_password")}
                    <input className={styles.input} placeholder={t("confirm_password")} type='password'
                           name={'confirmPassword'}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.confirmPassword}/>
                </label>
                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <p className={styles.error}>{formik.errors.confirmPassword}</p>}
                <button
                    type='submit'
                >
                    {t("login")}
                </button>
            </form>
        </>
    )
}

export default LoginForm;