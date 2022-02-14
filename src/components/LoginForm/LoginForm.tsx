import styles from './LoginForm.module.scss';
import {authorisationRequest} from "../../Redux/Actions/actions";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from 'formik';
import ValidationSchema from './validationSchema'
import Input from "./input";

function LoginForm() {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    let validationSchema = ValidationSchema();
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
                <Input form={formik} name={'firstName'} value={formik.values.firstName}/>
                {formik.touched.firstName && formik.errors.firstName &&
                <p className={styles.error}>{formik.errors.firstName}</p>}
                <Input form={formik} name={'password'} value={formik.values.password}/>
                {formik.touched.password && formik.errors.password &&
                <p className={styles.error}>{formik.errors.password}</p>}
                <Input form={formik} name={'confirmPassword'} value={formik.values.confirmPassword}/>
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