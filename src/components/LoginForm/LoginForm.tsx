import styles from './LoginForm.module.scss';
import {Formik} from "formik";
import * as yup from 'yup';
import {authorisationRequest} from "../../Redux/Actions/actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {useTranslation} from "react-i18next";

function LoginForm() {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const validationSchema = yup.object().shape({
        name: yup.string().typeError(t("name_required")).required(t("must_be_string")),
        password: yup.string().typeError(t("must_be_string")).required(t("password_required")),
        confirmPassword: yup.string().oneOf([yup.ref('password')], t("password_mismatch")).required(t("confirmation_required")),
    })
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: '',
                }}
                validateOnBlur
                onSubmit={(values) =>  console.log(values)}
                validationSchema={validationSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur, isValid, handleSubmit, dirty
                  }) =>
                    (
                        <div className={styles.form}>

                            <p>{t("login_to_admin")}</p>
                            <label htmlFor={'name'}>
                                {t("name")}
                                <input className={styles.input} placeholder={t("name")} type='text' name={'name'} onChange={handleChange}
                                       onBlur={handleBlur} value={values.name}/>
                            </label>
                            {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
                            <label htmlFor={'password'}>
                                {t("password")}
                                <input className={styles.input} placeholder={t("password")} type='password' name={'password'}
                                       onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            </label>
                            {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
                            <label htmlFor={'confirmPassword'}>
                                {t("confirm_password")}
                                <input className={styles.input} placeholder={t("confirm_password")}  type='password' name={'confirmPassword'}
                                       onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
                            </label>
                            {touched.confirmPassword && errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                            <button
                                disabled={!isValid && !dirty}
                                onClick={() => dispatch(authorisationRequest(values))}
                                type={'submit'}
                            >
                                <Link to={Path.HOME} >{t("login")}</Link>
                            </button>
                        </div>
                    )}
            </Formik>

        </>
    )
}

export default LoginForm;