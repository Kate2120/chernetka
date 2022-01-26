import styles from './LoginForm.module.scss';
import {Formik} from "formik";
import * as yup from 'yup';
import {authRequest} from "../../Redux/Actions/interfacies";
import {authorisationRequest, fetchUsersRequest} from "../../Redux/Actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {useEffect} from "react";
import {getAuth, getUsers} from "../../Redux/selectors";
function LoginForm() {
    const dispatch = useDispatch();
    let users = useSelector(getUsers);
    let auth = useSelector(getAuth)
    console.log(auth)
    console.log(users);
    useEffect(() => {
        if(users.length === 0){
            dispatch(fetchUsersRequest());
        }
    }, [dispatch]);

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Имя обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Пароль обязателен'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Подтверждение обязателено'),
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

                            <p>Для входа в админ панель введите имя и пароль</p>
                            <label htmlFor={'name'}>
                                Имя
                                <input className={styles.input} placeholder='Name' type='text' name={'name'} onChange={handleChange}
                                       onBlur={handleBlur} value={values.name}/>
                            </label>
                            {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
                            <label htmlFor={'password'}>
                                Пароль
                                <input className={styles.input} placeholder="Password" type='password' name={'password'}
                                       onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            </label>
                            {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
                            <label htmlFor={'confirmPassword'}>
                                Подтвердите пароль
                                <input className={styles.input} placeholder="Password"  type='password' name={'confirmPassword'}
                                       onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
                            </label>
                            {touched.confirmPassword && errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                            <button
                                disabled={!isValid && !dirty}
                                onClick={() => dispatch(authorisationRequest(values))}
                                type={'submit'}
                            >
                                <Link to={Path.HOME} >Войти</Link>
                            </button>
                        </div>
                    )}
            </Formik>

        </>
    )
}

export default LoginForm;